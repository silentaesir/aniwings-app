const GITHUB_RELEASES_URL = 'https://api.github.com/repos/silentaesir/aniwings-app/releases?per_page=100';
const CACHE_KEY = 'aniwings_download_stats_v2';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes cache to avoid hitting GitHub rate limits

export const FALLBACK_STATS = {
  total: 8954,
  mobile: 8058,
  tv: 869,
  desktop: 27,
  ios: 0,
};

export async function fetchLiveDownloadStats(initialFallback = FALLBACK_STATS) {
  const base = {
    total: Math.max(Number(initialFallback?.total) || 0, FALLBACK_STATS.total),
    mobile: Math.max(Number(initialFallback?.mobile) || 0, FALLBACK_STATS.mobile),
    tv: Math.max(Number(initialFallback?.tv) || 0, FALLBACK_STATS.tv),
    desktop: Math.max(Number(initialFallback?.desktop) || 0, FALLBACK_STATS.desktop),
    ios: Math.max(Number(initialFallback?.ios) || 0, FALLBACK_STATS.ios || 0),
  };

  // 1. Try reading from cache
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed?.timestamp && Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          if (parsed.stats && typeof parsed.stats.total === 'number' && parsed.stats.total >= base.total) {
            return parsed.stats;
          }
        }
      }
    } catch {
      // Ignore localStorage errors
    }
  }

  // 2. Fetch fresh stats from GitHub API
  try {
    const res = await fetch(GITHUB_RELEASES_URL);
    if (!res.ok) {
      throw new Error(`GitHub API HTTP ${res.status}`);
    }
    const releases = await res.json();
    if (!Array.isArray(releases)) {
      throw new Error('Invalid releases response');
    }

    let liveTotal = 0;
    let liveMobile = 0;
    let liveTv = 0;
    let liveDesktop = 0;
    let liveIos = 0;

    releases.forEach((rel) => {
      (rel.assets || []).forEach((asset) => {
        const count = Number(asset.download_count) || 0;
        const name = (asset.name || '').toLowerCase();

        // Only count installer and package binaries
        if (!name.match(/\.(apk|ipa|exe|zip|appimage|deb|rpm|dmg)$/)) {
          return;
        }

        liveTotal += count;
        if (name.includes('tv')) {
          liveTv += count;
        } else if (name.includes('desktop') || name.endsWith('.exe') || name.endsWith('.zip') || name.endsWith('.appimage')) {
          liveDesktop += count;
        } else if (name.includes('ios') || name.endsWith('.ipa')) {
          liveIos += count;
        } else {
          liveMobile += count;
        }
      });
    });

    const stats = {
      total: base.total + liveTotal,
      mobile: base.mobile + liveMobile,
      tv: base.tv + liveTv,
      desktop: base.desktop + liveDesktop,
      ios: base.ios + liveIos,
    };

    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), stats }));
      } catch {
        // Ignore localStorage quota errors
      }
    }

    return stats;
  } catch (err) {
    console.warn('Could not fetch live GitHub release stats, using baseline stats:', err);
    return base;
  }
}
