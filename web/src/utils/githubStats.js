const GITHUB_RELEASES_URL = 'https://api.github.com/repos/silentaesir/aniwings-app/releases?per_page=100';
const CACHE_KEY = 'aniwings_download_stats_v3';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes cache to avoid hitting GitHub rate limits

export const LEGACY_BASE = {
  total: 8954,
  mobile: 8058,
  tv: 869,
  windows: 20,
  linux: 7,
  desktop: 27,
  ios: 0,
};

export const FALLBACK_STATS = {
  total: 9319,
  mobile: 8325,
  tv: 940,
  windows: 39,
  linux: 12,
  desktop: 51,
  ios: 3,
};

export async function fetchLiveDownloadStats(initialFallback = FALLBACK_STATS) {
  const base = {
    total: Math.max(Number(initialFallback?.total) || 0, FALLBACK_STATS.total),
    mobile: Math.max(Number(initialFallback?.mobile) || 0, FALLBACK_STATS.mobile),
    tv: Math.max(Number(initialFallback?.tv) || 0, FALLBACK_STATS.tv),
    windows: Math.max(Number(initialFallback?.windows) || 0, FALLBACK_STATS.windows),
    linux: Math.max(Number(initialFallback?.linux) || 0, FALLBACK_STATS.linux),
    desktop: Math.max(Number(initialFallback?.desktop) || 0, FALLBACK_STATS.desktop),
    ios: Math.max(Number(initialFallback?.ios) || 0, FALLBACK_STATS.ios),
  };

  // 1. Try reading from cache
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed?.timestamp && Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          if (
            parsed.stats &&
            typeof parsed.stats.total === 'number' &&
            parsed.stats.total >= base.total &&
            typeof parsed.stats.ios === 'number' &&
            parsed.stats.ios >= base.ios
          ) {
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
    let liveWindows = 0;
    let liveLinux = 0;
    let liveDesktop = 0;
    let liveIos = 0;

    releases.forEach((rel) => {
      const releaseTag = (rel.tag_name || '').toLowerCase();
      (rel.assets || []).forEach((asset) => {
        const count = Number(asset.download_count) || 0;
        const name = (asset.name || '').toLowerCase();

        // Only count installer and package binaries
        if (!name.match(/\.(apk|ipa|exe|zip|appimage|deb|rpm|tar\.gz)$/)) {
          return;
        }

        liveTotal += count;
        if (name.includes('tv') || releaseTag.includes('tv')) {
          liveTv += count;
        } else if (name.includes('ios') || name.endsWith('.ipa') || releaseTag.includes('ios')) {
          liveIos += count;
        } else if (name.includes('windows') || name.endsWith('.exe') || releaseTag.includes('windows')) {
          liveWindows += count;
          liveDesktop += count;
        } else if (name.includes('linux') || name.endsWith('.appimage') || name.endsWith('.deb') || name.endsWith('.rpm') || releaseTag.includes('linux')) {
          liveLinux += count;
          liveDesktop += count;
        } else if (name.includes('desktop') || name.endsWith('.zip') || releaseTag.includes('desktop')) {
          liveDesktop += count;
          liveWindows += count;
        } else {
          liveMobile += count;
        }
      });
    });

    const stats = {
      total: Math.max(LEGACY_BASE.total + liveTotal, base.total),
      mobile: Math.max(LEGACY_BASE.mobile + liveMobile, base.mobile),
      tv: Math.max(LEGACY_BASE.tv + liveTv, base.tv),
      windows: Math.max(LEGACY_BASE.windows + liveWindows, base.windows),
      linux: Math.max(LEGACY_BASE.linux + liveLinux, base.linux),
      desktop: Math.max(LEGACY_BASE.desktop + liveDesktop, base.desktop),
      ios: Math.max(LEGACY_BASE.ios + liveIos, base.ios),
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
