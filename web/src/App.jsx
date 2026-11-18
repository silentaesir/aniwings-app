import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const DEFAULT_UPDATE_DATA = {
  version: '1.3.2',
  url: 'https://github.com/silentaesir/aniwings-app/releases/download/v1.3.2/AniWings-universal.apk',
  universalUrl: 'https://github.com/silentaesir/aniwings-app/releases/download/v1.3.2/AniWings-universal.apk',
  arm64Url: 'https://github.com/silentaesir/aniwings-app/releases/download/v1.3.2/AniWings-arm64-v8a.apk',
  armv7Url: 'https://github.com/silentaesir/aniwings-app/releases/download/v1.3.2/AniWings-armeabi-v7a.apk',
  iosUrl: 'https://github.com/silentaesir/aniwings-app/releases/download/ios-v1.3.2/AniWings-ios.ipa',
  mandatory: true,
  releaseNotes: 'AniWings v1.3.2 Update - Added manga providers health monitoring, fixed episode grid pagination, updated server channels, and optimized performance.',
  minVersion: '1.3.2',
  fileSize: '189.8 MB',
  updatedAt: '2026-11-18',
  appName: 'silentaesir',
  displayName: 'AniWings',
  githubUser: 'silentaesir',
  githubRepo: 'aniwings-app',
  githubUrl: 'https://github.com/silentaesir/aniwings-app',
  updateJsonUrl: 'https://raw.githubusercontent.com/silentaesir/aniwings-app/main/web/public/update.json',
  fallbackUpdateJsonUrl: 'https://raw.githubusercontent.com/thehakaiben-cmyk/aniwings-app/main/web/public/update.json',
  legacyGithubUser: 'thehakaiben-cmyk',
  legacyGithubUrl: 'https://github.com/thehakaiben-cmyk/aniwings-app',
  ios: {
    version: '1.3.2',
    tag: 'ios-v1.3.2',
    url: 'https://github.com/silentaesir/aniwings-app/releases/download/ios-v1.3.2/AniWings-ios.ipa',
    ipaUrl: 'https://github.com/silentaesir/aniwings-app/releases/download/ios-v1.3.2/AniWings-ios.ipa',
    fileName: 'AniWings-ios.ipa',
    mandatory: true,
    releaseNotes: 'AniWings iOS v1.3.2 Release - Brand new iOS update with smooth streaming, episode cache, manga reader, and modern UI.',
    sideloadNote: '📱 iOS Users (AniWings-ios.ipa): Download the .ipa and install it using SideStore, AltStore, Sideloadly, Feather, or TrollStore.',
    minVersion: '1.3.2',
    fileSize: '53.3 MB',
    updatedAt: '2026-11-18',
    appName: 'AniWings iOS'
  },
  tv: {
    version: '1.3.2',
    url: 'https://github.com/silentaesir/aniwings-app/releases/download/tv-v1.3.2/aniwings-tv-v1.3.2-universal.apk',
    universalUrl: 'https://github.com/silentaesir/aniwings-app/releases/download/tv-v1.3.2/aniwings-tv-v1.3.2-universal.apk',
    arm64Url: 'https://github.com/silentaesir/aniwings-app/releases/download/tv-v1.3.2/aniwings-tv-v1.3.2-arm64-v8a.apk',
    armv7Url: 'https://github.com/silentaesir/aniwings-app/releases/download/tv-v1.3.2/aniwings-tv-v1.3.2-armeabi-v7a.apk',
    mandatory: true,
    releaseNotes: 'AniWings TV v1.3.2 Update - Fixed the QR login feature, some bugs fixed and app optimized.',
    minVersion: '1.3.2',
    fileSize: '71.1 MB',
    updatedAt: '2026-11-18',
    appName: 'AniWings TV'
  },
  desktop: {
    version: '1.3.1',
    url: 'https://github.com/silentaesir/aniwings-app/releases/download/desktop-v1.3.1/aniwings-desktop-windows-v1.3.1-setup.exe',
    windowsUrl: 'https://github.com/silentaesir/aniwings-app/releases/download/desktop-v1.3.1/aniwings-desktop-windows-v1.3.1-setup.exe',
    windowsSetupUrl: 'https://github.com/silentaesir/aniwings-app/releases/download/desktop-v1.3.1/aniwings-desktop-windows-v1.3.1-setup.exe',
    windowsExeUrl: 'https://github.com/silentaesir/aniwings-app/releases/download/desktop-v1.3.1/aniwings-desktop-windows-v1.3.1.exe',
    windowsPortableUrl: 'https://github.com/silentaesir/aniwings-app/releases/download/desktop-v1.3.1/aniwings-desktop-windows-v1.3.1-portable.zip',
    linuxUrl: 'https://github.com/silentaesir/aniwings-app/releases/download/desktop-v1.3.1/aniwings-desktop-linux-v1.3.1.AppImage',
    windowsSetupFileName: 'aniwings-desktop-windows-v1.3.1-setup.exe',
    windowsExeFileName: 'aniwings-desktop-windows-v1.3.1.exe',
    windowsFileName: 'aniwings-desktop-windows-v1.3.1-setup.exe',
    linuxFileName: 'aniwings-desktop-linux-v1.3.1.AppImage',
    mandatory: true,
    releaseNotes: 'AniWings Desktop v1.3.1 Release - Fixed bugs, some UI changes and optimised smoother performance.',
    minVersion: '1.3.1',
    fileSize: '42 MB - 82 MB',
    updatedAt: '2026-11-18',
    appName: 'AniWings Desktop'
  },
  downloadStats: {
    total: 8954,
    mobile: 8058,
    tv: 869,
    desktop: 27,
    ios: 0
  }
};

function App() {
  const [updateData, setUpdateData] = useState(DEFAULT_UPDATE_DATA);

  useEffect(() => {
    let isMounted = true;

    async function loadUpdateInfo() {
      try {
        let res = await fetch(`/update.json?t=${Date.now()}`, { cache: 'no-store' });
        if (!res.ok) {
          res = await fetch(`https://raw.githubusercontent.com/silentaesir/aniwings-app/main/web/public/update.json?t=${Date.now()}`, { cache: 'no-store' });
        }
        if (!res.ok) {
          res = await fetch(`https://raw.githubusercontent.com/thehakaiben-cmyk/aniwings-app/main/web/public/update.json?t=${Date.now()}`, { cache: 'no-store' });
        }
        if (!res.ok) throw new Error(`HTTP status: ${res.status}`);
        const data = await res.json();
        if (isMounted && data && typeof data === 'object') {
          setUpdateData((prev) => ({ ...prev, ...data }));
        }
      } catch (err) {
        console.warn('Failed to load update.json, using fallback defaults:', err);
      }
    }

    loadUpdateInfo();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Router>
      <AppShell updateData={updateData} />
    </Router>
  );
}

function AppShell({ updateData }) {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              updateData={updateData}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
