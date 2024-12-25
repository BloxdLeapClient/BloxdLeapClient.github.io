//One Time Code

function onLoad() {
    let SettingsCategoriesList = document.querySelector("div.SettingsCategoriesList");
    let SettingsLeapClient = document.querySelector("div.SettingsSectionTitle.SettingsLeapClient");
    
        //Leap Client Settings Page
        SettingsCategoriesList.innerHTML += `<div class="SettingsSectionTitle SettingsLeapClient">&nbsp;Leap Client</div>`;
    
        //Remove Ads (Work in Progress)
        document.querySelectorAll(".HomeBannerInner").remove()
        document.querySelectorAll(".GoogleActiveViewElement").remove()


    };
    
    onLoad()
    
    //Repeated Code Below
    
    setInterval(function() {
    
        //Change Title
        document.title = "Leap Client for Bloxd.io";
    
        //Change Page Title
        document.querySelecto("div.Title.FullyFancyText").innerHTML = 'Leap Client';
        document.querySelector("div.Title.FullyFancyText").style.fontSize = "3.3em";

        //Adblocker Code
    
        //ActiveSettingsSectionTitle
    } ,1);