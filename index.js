const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "98938c5d59mshb88238f28a5e8b2p180ea3jsnf0700951084b",
    "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
  },
};
const form = document.querySelector("form");
const inputName = document.getElementById("stock_name");
const inputPrice = document.getElementById("price");
const hero_section = document.getElementById("zero");
const list_section = document.querySelector("#nono");
const list_btn = document.querySelector("#generate");

function showDiv() {
  document.getElementById('nono').style.display = "block";
}
var stock = async function () {
  let res = await fetch(
    `https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050`,
    options
  );
  var response = await res.json();
  console.log(response)
  for(let i = 0;i<=51;i++){
    let stock_nm = response[i].symbol;
    list_section.innerHTML += `<li>${stock_nm}</li>`;
  }
  return response;
};
stock();
form.addEventListener("submit", (e) => {
  e.preventDefault();
//   let car = stock();
// console.log("this shit",car);
const sam = async function() {
  let res2 = await fetch(
          `https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050`,
          options
        );
  // let man = await res2.json()
      let response2 = await res2.json();
    for(let i = 0;i<=51;i++){
      let stock = response2[i].symbol;
    if(stock === document.getElementById('stock_name').value){
      console.log("Array",response2[i])
      console.log("Name of the Stock",stock)
      console.log("Last price",response2[i].lastPrice)
      let profit = response2[i].lastPrice - inputPrice.value;
      let pro_percent = profit/response2[i].lastPrice;
      console.log(pro_percent);
      console.log("this is sub",profit)
      const html = `
      <p>Company Name <span>${stock}</span></p>
      <p>Today's Stock price is <span>${response2[i].lastPrice}</span></p>
      <p>Difference in the prices <span>${(profit).toFixed(2)}</span></p>
      <p>The profit percentage is <span>${pro_percent.toFixed(2)}%</span></p>`;

      hero_section.insertAdjacentHTML('beforeend', html);
      console.log(inputPrice.value);
      inputName.value='';
      inputPrice.value='';
    }}
  };
  sam();
});



//   const stock = async function () {
//     let res = await fetch(
//       `https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050`,
//       options
//     );

//     let response = await res.json();
//     for(let i = 0;i<=51;i++){
//       let stock = response[i].symbol;
//     if(stock === document.getElementById('stock_name').value){
//       console.log("Array",response[i])
//       console.log("Name of the Stock",stock)
//       console.log("Last price",response[i].lastPrice)
//       let profit = response[i].lastPrice - inputPrice.value;
//       let pro_percent = profit/response[i].lastPrice;
//       console.log(pro_percent);
//       console.log("this is sub",profit)
//       const html = `
//       <p>Today's Stock price is <span>${response[i].lastPrice}</span></p>
//       <p>Difference in the prices <span>${(profit).toFixed(2)}</span></p>
//       <p>The profit percentage is <span>${pro_percent.toFixed(2)}%</span></p>`;

//       hero_section.insertAdjacentHTML('beforeend', html);
//       console.log(inputPrice.value);
//     }}
//   };
//   stock();
// });
