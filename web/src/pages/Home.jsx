import { useEffect, useState } from 'react';
import { fetchLiveDownloadStats, FALLBACK_STATS } from '../utils/githubStats';

function LinuxIcon({ className = '', style = {} }) {
  return (
    <svg 
      className={`linux-icon ${className}`} 
      style={{ display: 'inline-block', verticalAlign: '-0.15em', ...style }} 
      role="img" 
      viewBox="0 0 24 24" 
      width="1em" 
      height="1em" 
      fill="currentColor"
    >
      <title>Linux</title>
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z" />
    </svg>
  );
}

export default function Home({ updateData }) {
  const initialStats = updateData?.downloadStats || FALLBACK_STATS;
  const [downloadStats, setDownloadStats] = useState(initialStats);

  useEffect(() => {
    let isMounted = true;
    fetchLiveDownloadStats(updateData?.downloadStats).then((stats) => {
      if (isMounted && stats) {
        setDownloadStats(stats);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [updateData?.downloadStats]);

  const formatCount = (count) => {
    return (count || 0).toLocaleString();
  };

  const DEFAULT_GITHUB_RELEASE_URL = 'https://github.com/silentaesir/aniwings-app/releases/download/v1.3.3/AniWings-universal.apk';
  const DEFAULT_IOS_RELEASE_URL = 'https://github.com/silentaesir/aniwings-app/releases/download/ios-v1.3.3/AniWings-ios.ipa';
  const DEFAULT_TV_RELEASE_URL = 'https://github.com/silentaesir/aniwings-app/releases/download/tv-v1.3.3/aniwings-tv-v1.3.3-universal.apk';

  // Windows Desktop Defaults
  const DEFAULT_WINDOWS_SETUP_URL = 'https://github.com/silentaesir/aniwings-app/releases/download/windows-v1.3.2/aniwings-desktop-windows-v1.3.2-setup.exe';
  const DEFAULT_WINDOWS_EXE_URL = 'https://github.com/silentaesir/aniwings-app/releases/download/windows-v1.3.2/aniwings-desktop-windows-v1.3.2.exe';
  const DEFAULT_WINDOWS_PORTABLE_URL = 'https://github.com/silentaesir/aniwings-app/releases/download/windows-v1.3.2/aniwings-desktop-windows-v1.3.2-portable.zip';

  // Linux Desktop Defaults
  const DEFAULT_LINUX_APPIMAGE_URL = 'https://github.com/silentaesir/aniwings-app/releases/download/linux-v1.3.2/aniwings-desktop-linux-v1.3.2.AppImage';

  const downloadUrl = updateData?.url || DEFAULT_GITHUB_RELEASE_URL;
  const universalDownloadUrl = updateData?.universalUrl || downloadUrl;
  const arm64DownloadUrl = updateData?.arm64Url || downloadUrl;
  const armv7DownloadUrl = updateData?.armv7Url || updateData?.armV7Url || downloadUrl;
  const fileSize = updateData?.fileSize || '190.0 MB';
  const updatedAt = updateData?.updatedAt || '2026-11-26';
  const releaseNotes = updateData?.releaseNotes;

  const iosData = updateData?.ios;
  const iosDownloadUrl = iosData?.ipaUrl || iosData?.url || updateData?.iosUrl || DEFAULT_IOS_RELEASE_URL;
  const iosFileSize = iosData?.fileSize || '58.5 MB';
  const iosVersion = iosData?.version || '1.3.3';
  const iosUpdatedAt = iosData?.updatedAt || '2026-11-26';
  const iosReleaseNotes = iosData?.releaseNotes;

  const tvData = updateData?.tv;
  const tvDownloadUrl = tvData?.url || updateData?.tvUrl || DEFAULT_TV_RELEASE_URL;
  const tvUniversalDownloadUrl = tvData?.universalUrl || updateData?.tvUniversalUrl || tvDownloadUrl;
  const tvArm64DownloadUrl = tvData?.arm64Url || updateData?.tvArm64Url || tvDownloadUrl;
  const tvArmv7DownloadUrl = tvData?.armv7Url || updateData?.tvArmv7Url || tvDownloadUrl;
  const tvFileSize = tvData?.fileSize || '70.4 MB';

  // Windows
  const windowsData = updateData?.windows || updateData?.desktop?.windows || updateData?.desktop;
  const windowsSetupDownloadUrl = windowsData?.setupUrl || windowsData?.windowsSetupUrl || DEFAULT_WINDOWS_SETUP_URL;
  const windowsExeDownloadUrl = windowsData?.exeUrl || windowsData?.windowsExeUrl || windowsData?.windowsUrl || DEFAULT_WINDOWS_EXE_URL;
  const windowsPortableZipDownloadUrl = windowsData?.portableUrl || windowsData?.windowsPortableUrl || DEFAULT_WINDOWS_PORTABLE_URL;
  const windowsFileSize = windowsData?.fileSize || '60.0 MB';
  const windowsVersion = windowsData?.version || '1.3.2';
  const windowsUpdatedAt = windowsData?.updatedAt || '2026-11-26';
  const windowsReleaseNotes = windowsData?.releaseNotes;

  // Linux
  const linuxData = updateData?.linux || updateData?.desktop?.linux;
  const linuxAppImageDownloadUrl = linuxData?.appImageUrl || linuxData?.linuxUrl || DEFAULT_LINUX_APPIMAGE_URL;
  const linuxFileSize = linuxData?.fileSize || '42.7 MB';
  const linuxVersion = linuxData?.version || '1.3.2';
  const linuxUpdatedAt = linuxData?.updatedAt || '2026-11-26';
  const linuxReleaseNotes = linuxData?.releaseNotes;

  useEffect(() => {
    // Scroll Reveal Animation via IntersectionObserver
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleScrollToDownload = (e) => {
    e.preventDefault();
    const downloadSection = document.getElementById('section-download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const directDownloadUrl = (url) => url;

  return (
    <div>
      {/* Hero Section */}
      <div id="heading-content">
        <div className="container">
          <div className="big-intro-content reveal active">
            <div className="bi-left">
              <div className="version-badge">
                <span className="badge-new">v{updateData?.version || '1.3.3'}</span>
                <span className="version-text">
                  <i className="ri-download-cloud-line" style={{ marginRight: '5px' }}></i>
                  {formatCount(downloadStats.total)}+ Total Downloads
                </span>
              </div>
              <h1 className="heading">
                Enjoy Uninterrupted Anime on <span className="highlight">AniWings</span>
              </h1>
              <p className="description">
                Sick of constant interruptions, tedious sign-ups, and broken streaming servers? AniWings is your go-to ad-free anime client across Android, iOS, TV, Windows &amp; Linux. Features an advanced integrated media player, personalized library tracking, and butter-smooth playback for a top-tier viewing journey.
              </p>
              <div className="flex-btns">
                <a 
                  href="#section-download" 
                  onClick={handleScrollToDownload} 
                  className="btn btn-lg btn-pre"
                >
                  <i className="ri-download-line"></i>
                  <span>Download AniWings APK</span>
                </a>
                <a 
                  href="https://ani-wings.web.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-lg btn-secondary website-btn"
                >
                  <i className="ri-global-line"></i>
                  <span>Visit AniWings Website</span>
                </a>
              </div>
            </div>
            <div className="bi-right">
              <div className="app-mockup-wrapper">
                <div className="mockup-screen mockup-back">
                  <img src="/images/app-login.jpg" alt="AniWings App Login Screen" />
                </div>
                <div className="mockup-screen mockup-front">
                  <img src="/images/app-home.jpg" alt="AniWings App Home Screen" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is AniWings Section */}
      <div className="section section-about reveal" id="section-about">
        <div className="container">
          <div className="content-x">
            <div className="intro">
              <img alt="AniWings details" src="/images/discover.jpg" style={{ border: '4px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px' }} />
            </div>
            <div className="text">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
                Discover <strong className="highlight">AniWings</strong>
              </h2>
              <p>
                AniWings is a completely free anime directory and player optimized for the Android ecosystem. Acting as a dedicated streaming hub, it organizes and streams thousands of titles, feature films, and the latest simulcast episodes.
              </p>
              <p>
                We focus on a bloat-free design and user privacy. You don't need to create an account, there are no subscriptions, and we don't serve intrusive banner or pop-up ads. Simply install the application, look up your favorite shows, and start your streaming session.
              </p>
              <p>
                Whether you love original Japanese voice acting with clear subtitles (SUB) or prefer localized English voice tracks (DUB), AniWings offers quick toggles so you can switch languages instantly during playback.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="section section-features reveal" id="section-features">
        <div className="container">
          <h2 className="section-title">Why Stream on AniWings?</h2>
          <p className="section-desc">Crafted by community enthusiasts for dedicated fans. Here is what you can expect from the AniWings app.</p>
          
          <div className="features-list">
            <div className="fl-item">
              <div className="fl-icon">
                <i className="ri-shield-user-line"></i>
              </div>
              <div className="fl-title">Complete Privacy</div>
              <div className="fl-content">
                <p>Skip registration screens and emails. Access our massive collection of shows immediately without logging in or sharing any credentials.</p>
              </div>
            </div>

            <div className="fl-item">
              <div className="fl-icon">
                <i className="ri-translate-2"></i>
              </div>
              <div className="fl-title">Dual Audio Options</div>
              <div className="fl-content">
                <p>Break language barriers with ease. Quickly toggle between English subtitles (SUB) and localized voiceovers (DUB) directly from the stream settings.</p>
              </div>
            </div>

            <div className="fl-item">
              <div className="fl-icon">
                <i className="ri-speed-up-line"></i>
              </div>
              <div className="fl-title">Buffering-Free Engine</div>
              <div className="fl-content">
                <p>No more loading loops. AniWings integrates fast content delivery networks (CDNs) to stream your favorite episodes in HD with minimal latency.</p>
              </div>
            </div>

            <div className="fl-item">
              <div className="fl-icon">
                <i className="ri-history-line"></i>
              </div>
              <div className="fl-title">Fresh Simulcasts Everyday</div>
              <div className="fl-content">
                <p>Stay updated with ongoing seasonal anime. We refresh our catalogue daily with new episodes, syncing directly with the Japanese TV releases.</p>
              </div>
            </div>

            <div className="fl-item">
              <div className="fl-icon">
                <i className="ri-advertisement-line"></i>
              </div>
              <div className="fl-title">Zero Advertisements</div>
              <div className="fl-content">
                <p>Experience pure, uninterrupted entertainment. Our app prevents redirects, pop-ups, and annoying video ads from spoiling your watch sessions.</p>
              </div>
            </div>

            <div className="fl-item">
              <div className="fl-icon">
                <i className="ri-star-line"></i>
              </div>
              <div className="fl-title">Custom Anime Library</div>
              <div className="fl-content">
                <p>Track and curate your collection. Organize completed titles, keep tabs on your current episode count, and build watchlists for upcoming releases.</p>
              </div>
            </div>

            <div className="fl-item">
              <div className="fl-icon">
                <i className="ri-book-open-line"></i>
              </div>
              <div className="fl-title">Manga &amp; Offline Reading</div>
              <div className="fl-content">
                <p>Read thousands of manga chapters and download them for offline reading on mobile. Enjoy custom reader modes, smooth page turns, and progress tracking.</p>
              </div>
            </div>

            <div className="fl-item">
              <div className="fl-icon">
                <i className="ri-puzzle-line"></i>
              </div>
              <div className="fl-title">Extension Support</div>
              <div className="fl-content">
                <p>Unlock endless anime catalogues with modular extension support like Yozuno and Aniyomi extensions. Easily add custom repositories, scrapers, and external sources.</p>
              </div>
            </div>

            <div className="fl-item">
              <div className="fl-icon">
                <i className="ri-sparkling-fill"></i>
              </div>
              <div className="fl-title">AI Translator</div>
              <div className="fl-content">
                <p>Enjoy anime in any language with our intelligent real-time AI subtitle translator, delivering instant and accurate dialogue translations on the fly.</p>
              </div>
            </div>

            <div className="fl-item">
              <div className="fl-icon">
                <i className="ri-hd-line"></i>
              </div>
              <div className="fl-title">Video Upscaler Feature</div>
              <div className="fl-content">
                <p>Elevate your visual experience with real-time video upscaling. Enhance video resolution, sharpen textures, and boost color vibrancy for stunning high-definition playback.</p>
              </div>
            </div>

            <div className="fl-item">
              <div className="fl-icon">
                <i className="ri-server-line"></i>
              </div>
              <div className="fl-title">Torrent Server</div>
              <div className="fl-content">
                <p>Stream high-quality anime releases directly through the built-in torrent server engine. Experience instant peer-to-peer playback without waiting for full downloads.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Section */}
      <div className="section section-about reveal">
        <div className="container">
          <div className="content-x reverse">
            <div className="intro">
              <img src="/images/secure.jpg" alt="AniWings Trust" style={{ border: '4px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px' }} />
            </div>
            <div className="text">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
                Is Using AniWings Secure?
              </h2>
              <p>
                <strong>Yes, 100%.</strong> Transparency and security are core values of AniWings. The app operates without needing root access, system permissions, or background tracking services, ensuring your personal details and device remain fully secure.
              </p>
              <p>
                We perform constant safety checks and keep the build completely free of malware, spyware, and telemetry code. We want your watch sessions to be relaxing and worry-free, without compromising on your digital privacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="section section-download reveal" id="section-download">
        <div className="container">
          <h2 className="section-title">Grab the Latest AniWings Release</h2>
          <p className="section-desc">Over {formatCount(downloadStats.total)}+ downloads across Android, iOS, TV, Windows &amp; Linux. Fetch the installable files below and launch your new premium anime experience.</p>
          
          <div className="dl-ul">
            {/* Android Mobile */}
            <div className="dlu-item">
              <div className="dlu-icon">
                <i className="ri-android-line"></i>
              </div>
              <h3 className="dlu-title">Android Mobile</h3>
              <p className="dlu-desc">{fileSize} • {formatCount(downloadStats.mobile)}+ downloads • Select build for Android Mobiles &amp; Tablets.</p>
              <div className="dlu-detail">
                <div className="dlu-btn-group">
                  <a 
                    href={directDownloadUrl(universalDownloadUrl)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-pre dlu-split-btn"
                  >
                    <i className="ri-download-fill"></i>
                    <span>Universal APK <span className="btn-tag">All Devices</span></span>
                  </a>
                  <a 
                    href={directDownloadUrl(arm64DownloadUrl)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-secondary dlu-split-btn"
                  >
                    <i className="ri-cpu-line"></i>
                    <span>ARM64 v8a APK <span className="btn-tag">High-End</span></span>
                  </a>
                  <a 
                    href={directDownloadUrl(armv7DownloadUrl)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-secondary dlu-split-btn"
                  >
                    <i className="ri-smartphone-line"></i>
                    <span>armeabi-v7a APK <span className="btn-tag">Low-End</span></span>
                  </a>
                </div>
                {releaseNotes && (
                  <div className="dlu-release-notes">
                    <div className="dlu-rn-header">
                      <h4 className="dlu-rn-title">
                        <i className="ri-smartphone-line" style={{ color: 'var(--accent-primary)' }}></i>
                        <span>v{updateData?.version || '1.3.3'} Release Notes</span>
                      </h4>
                      <span className="dlu-rn-date">{updatedAt}</span>
                    </div>
                    <p className="dlu-rn-body">{releaseNotes}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Android TV */}
            <div className="dlu-item">
              <div className="dlu-icon">
                <i className="ri-tv-line"></i>
              </div>
              <h3 className="dlu-title">Android TV</h3>
              <p className="dlu-desc">{tvFileSize} • {formatCount(downloadStats.tv)}+ downloads • Select build for Smart TVs &amp; TV boxes.</p>
              <div className="dlu-detail">
                <div className="dlu-btn-group">
                  <a 
                    href={directDownloadUrl(tvUniversalDownloadUrl)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-pre dlu-split-btn"
                  >
                    <i className="ri-download-fill"></i>
                    <span>Universal TV APK <span className="btn-tag">All TVs</span></span>
                  </a>
                  <a 
                    href={directDownloadUrl(tvArm64DownloadUrl)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-secondary dlu-split-btn"
                  >
                    <i className="ri-cpu-line"></i>
                    <span>ARM64 v8a TV APK <span className="btn-tag">High-End</span></span>
                  </a>
                  <a 
                    href={directDownloadUrl(tvArmv7DownloadUrl)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-secondary dlu-split-btn"
                  >
                    <i className="ri-tv-2-line"></i>
                    <span>armeabi-v7a TV APK <span className="btn-tag">Low-End</span></span>
                  </a>
                </div>
                {tvData?.releaseNotes && (
                  <div className="dlu-release-notes">
                    <div className="dlu-rn-header">
                      <h4 className="dlu-rn-title">
                        <i className="ri-tv-line" style={{ color: '#3DDC84' }}></i>
                        <span>v{tvData?.version || '1.3.3'} Release Notes</span>
                      </h4>
                      <span className="dlu-rn-date">{tvData?.updatedAt || '2026-11-26'}</span>
                    </div>
                    <p className="dlu-rn-body">{tvData.releaseNotes}</p>
                  </div>
                )}
              </div>
            </div>

            {/* iOS */}
            <div className="dlu-item">
              <div className="dlu-icon">
                <i className="ri-apple-line"></i>
              </div>
              <h3 className="dlu-title">iOS (IPA)</h3>
              <p className="dlu-desc">{iosFileSize} • {formatCount(downloadStats.ios || 0)}+ downloads • Select build for iPhone &amp; iPad.</p>
              <div className="dlu-detail">
                <div className="dlu-btn-group">
                  <a 
                    href={directDownloadUrl(iosDownloadUrl)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-pre dlu-split-btn"
                  >
                    <i className="ri-apple-fill"></i>
                    <span>AniWings-ios.ipa <span className="btn-tag">iPhone &amp; iPad</span></span>
                  </a>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '12px', lineHeight: '1.45', marginBottom: 0 }}>
                  📱 <strong>iOS Users (AniWings-ios.ipa):</strong> Install using SideStore, AltStore, Sideloadly, Feather, or TrollStore.
                </p>
                {iosReleaseNotes && (
                  <div className="dlu-release-notes">
                    <div className="dlu-rn-header">
                      <h4 className="dlu-rn-title">
                        <i className="ri-apple-fill" style={{ color: '#A2AAAD' }}></i>
                        <span>v{iosVersion} Release Notes</span>
                      </h4>
                      <span className="dlu-rn-date">{iosUpdatedAt}</span>
                    </div>
                    <p className="dlu-rn-body">{iosReleaseNotes}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Windows Desktop */}
            <div className="dlu-item">
              <div className="dlu-icon">
                <i className="ri-windows-fill"></i>
              </div>
              <h3 className="dlu-title">Windows</h3>
              <p className="dlu-desc">{windowsFileSize} • {formatCount(downloadStats.windows || downloadStats.desktop || 0)}+ downloads • Windows 10 &amp; 11 (64-bit).</p>
              <div className="dlu-detail">
                <div className="dlu-btn-group">
                  <a 
                    href={directDownloadUrl(windowsSetupDownloadUrl)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-pre dlu-split-btn"
                  >
                    <i className="ri-windows-fill"></i>
                    <span>Windows Setup (.exe) <span className="btn-tag">Installer</span></span>
                  </a>
                  <a 
                    href={directDownloadUrl(windowsExeDownloadUrl)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-secondary dlu-split-btn"
                  >
                    <i className="ri-file-code-line"></i>
                    <span>Standalone (.exe) <span className="btn-tag">Portable</span></span>
                  </a>
                  <a 
                    href={directDownloadUrl(windowsPortableZipDownloadUrl)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-secondary dlu-split-btn"
                  >
                    <i className="ri-file-zip-line"></i>
                    <span>Portable ZIP (.zip) <span className="btn-tag">Archive</span></span>
                  </a>
                </div>
                {windowsReleaseNotes && (
                  <div className="dlu-release-notes">
                    <div className="dlu-rn-header">
                      <h4 className="dlu-rn-title">
                        <i className="ri-windows-fill" style={{ color: '#0078D4' }}></i>
                        <span>v{windowsVersion} Release Notes</span>
                      </h4>
                      <span className="dlu-rn-date">{windowsUpdatedAt}</span>
                    </div>
                    <p className="dlu-rn-body">{windowsReleaseNotes}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Linux Desktop */}
            <div className="dlu-item">
              <div className="dlu-icon">
                <LinuxIcon />
              </div>
              <h3 className="dlu-title">Linux</h3>
              <p className="dlu-desc">{linuxFileSize} • {formatCount(downloadStats.linux || 0)}+ downloads • Ubuntu, Debian, Fedora &amp; Arch.</p>
              <div className="dlu-detail">
                <div className="dlu-btn-group">
                  <a 
                    href={directDownloadUrl(linuxAppImageDownloadUrl)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-pre dlu-split-btn"
                  >
                    <LinuxIcon style={{ marginRight: '6px' }} />
                    <span>Linux (.AppImage) <span className="btn-tag">Universal</span></span>
                  </a>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '12px', lineHeight: '1.45', marginBottom: 0 }}>
                  🐧 <strong>Linux Users (x86_64):</strong> Make the <code>.AppImage</code> executable with <code>chmod +x</code> and run directly on any distribution.
                </p>
                {linuxReleaseNotes && (
                  <div className="dlu-release-notes">
                    <div className="dlu-rn-header">
                      <h4 className="dlu-rn-title">
                        <LinuxIcon style={{ color: '#FCC624', flexShrink: 0 }} />
                        <span>v{linuxVersion} Release Notes</span>
                      </h4>
                      <span className="dlu-rn-date">{linuxUpdatedAt}</span>
                    </div>
                    <p className="dlu-rn-body">{linuxReleaseNotes}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
