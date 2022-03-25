const API =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

const sitelist = document.querySelector(".siteList");
const form = document.querySelector("#searchForm");

async function Youbike(searchKeyword) {
  const response = await fetch(API);
  const responseData = await response.json();
  let matchingResult = responseData.filter((data) =>
    data.ar.includes(searchKeyword)
  );
  matchingResult.forEach((station) => {
    sitelist.insertAdjacentHTML(
      "afterbegin",
      `<li class="list-group-item fs-5">
    <i class="fas fa-bicycle"></i>
    ${station.sna.replace("YouBike2.0_", "")} (${station.sbi})<br />
    <small class="text-muted">${station.ar}</small>
  </li>`
    );
  });
}
form.addEventListener("submit", (e) => {
  const inputText = document.querySelector("#searchKeyword");
  e.preventDefault();
  if (searchKeyword.value == "") {
    alert("請輸入路名關鍵字");
  }
  sitelist.innerHTML = ``;
  Youbike(searchKeyword.value);
});
