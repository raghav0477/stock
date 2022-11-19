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
const hero_section = document.getElementById('zero');
// fetch('https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response[0]))
// 	.catch(err => console.error(err));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const stock = async function () {
    let res = await fetch(
      `https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050`,
      options
    );

    let response = await res.json();

    for(let i = 0;i<=51;i++){
      let stock = response[i].symbol;
    if(stock === document.getElementById('stock_name').value){
      console.log("Array",response[i])
      console.log("Name of the Stock",stock)
      console.log("Last price",response[i].lastPrice)
      let profit = response[i].lastPrice - inputPrice.value;
      let pro_percent = profit/response[i].lastPrice;
      console.log(pro_percent);
      console.log("this is sub",profit)
      const html = `
      <p>Today's Stock price is <span>${response[i].lastPrice}</span></p>
      <p>Difference in the prices <span>${(profit).toFixed(2)}</span></p>
      <p>The profit percentage is <span>${pro_percent.toFixed(2)}%</span></p>`;

      hero_section.insertAdjacentHTML('beforeend', html);
      console.log(inputPrice.value);
    }}

    console.log("first");

  };
  stock();

});
