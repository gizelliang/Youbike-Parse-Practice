// 程式碼寫這裡

const API =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

const sitelist = document.querySelector(".siteList");
const form = document.querySelector("#searchForm");

async function Youbike(keyWord) {
  const response = await fetch(API);
  const responseData = await response.json();
  //let keyWord = responseData; Error message:redeclaration of formal parameter
  let matchingResult = responseData.filter((data) => data.ar.includes(keyWord));
  return matchingResult;
}
console.log(Youbike(keyWord)); //Error message:keyWord not defined.
