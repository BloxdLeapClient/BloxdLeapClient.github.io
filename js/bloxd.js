function iframeLoaded() {
    const iframe = document.getElementById('game-iframe');
    if (!iframe.contentWindow) {
        console.error("Iframe contentWindow not found.");
        return;
    }
    const iframeDoc = iframe.contentWindow.document;

    function modifyIframe() {

        // Function to modify iframe content (called initially and on an interval)
        function modifyIframe() {
            // Change Page Title
            const titleElement = iframeDoc.querySelector('div.Title.FullyFancyText');
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
        setInterval(modifyIframe, 1);
    }
    }

    // MutationObserver to wait for DOM changes
    const observer = new MutationObserver(mutations => {
        // Check if the target elements exist
        const titleElement = iframeDoc.querySelector('div.Title.FullyFancyText');
        const settingsList = iframeDoc.querySelector('.SettingsCategoriesList');

        if (titleElement && settingsList) {
            modifyIframe();
            // Disconnect the observer once modifications are done
            observer.disconnect();
        }
    });

    // Observe changes in the iframe's body
    observer.observe(iframeDoc.body, { childList: true, subtree: true });