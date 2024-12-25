// bloxd.js
function iframeLoaded() {
    const iframe = document.getElementById('game-iframe');
    // Check if contentWindow exists (important for cross-origin security)
    if (!iframe.contentWindow) {
        console.error("Iframe contentWindow not found. Likely cross-origin issue.");
        return;
    }
    const iframeDoc = iframe.contentWindow.document;

    // Function to modify iframe content (called initially and on an interval)
    function modifyIframe() {
        // Change Page Title
        const titleElement = iframeDoc.querySelector('.Title.FullyFancyText');
        if (titleElement) {
            titleElement.innerHTML = 'Leap Client';
            titleElement.style.fontSize = '3.3em';
        }

        // Settings
        const SettingsCategoriesList = iframeDoc.querySelector('.SettingsCategoriesList');
        if (SettingsCategoriesList) {
            // Check if Leap Client settings already exist to avoid duplicates
            if (!iframeDoc.querySelector('.SettingsLeapClient')) {
                SettingsCategoriesList.innerHTML += '<div class="SettingsSectionTitle SettingsLeapClient">&nbsp;Leap Client</div>';
            }
        }

        // Ad Removal (unlikely to work due to cross-origin policy)
        const ads = iframeDoc.querySelectorAll('.HomeBannerInner, .GoogleActiveViewElement');
        ads.forEach(ad => {
            if (ad) {
                ad.remove();
            }
        });
    }

    // Initial modification
    modifyIframe();

    // Set up interval (adjust interval as needed)
    setInterval(modifyIframe, 1000); // Example: update every 1000ms (1 second)
}