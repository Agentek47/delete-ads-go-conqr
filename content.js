// Scripts que se ejecutan cuando el contenido es cargado. Manipulación del contenido de la página
const contentAd = document.getElementById("resource_interstitial");
const sidePanelContentAd = document.getElementById("ads_pane");
const body = document.getElementsByTagName("body");

console.log("Modal element ", contentAd);
console.log("Ads side panel", sidePanelContentAd);
/* ----- */

contentAd.remove();
sidePanelContentAd.remove();
body[0].classList.remove("with_ads");
