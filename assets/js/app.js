const buttonToFetch = document.querySelector(".dice");
let imageDevider = document.querySelector(".devider img");
let imagesForViewports = {
  mobile: "./assets/images/pattern-divider-mobile.svg",
  desktop: "./assets/images/pattern-divider-desktop.svg",
};
let intervalID;
let adviceContent = document.querySelector(".container p");
let adviceID = document.querySelector(".advice-id");

intervalID = setInterval(fetchData, 5000);

buttonToFetch.addEventListener("click", () => {
  fetchData();
  clearInterval(intervalID);
});

function fetchData() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then(({slip}) => {
      const {advice, id} = slip
      adviceContent.textContent = `"${advice}"`
      adviceID.textContent = `advice #${id}`
    });
}
fetchData();

visualViewport.onresize = () => {
  const currentViewportWidth = window.visualViewport.width;
  if (currentViewportWidth <= 576) imageDevider.src = imagesForViewports.mobile;
  else imageDevider.src = imagesForViewports.desktop;
};
