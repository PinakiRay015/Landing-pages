const menu = document.querySelector('#menu')
const sidemenu = document.querySelector('.mobileNav');
const closeMenu = document.querySelector("#closeMenu")

menu.addEventListener('click' , ()=>{
    sidemenu.style.left = "0%";
    document.body.style.overflowY = "hidden"
})

closeMenu.addEventListener('click' , ()=>{
    sidemenu.style.left = "-100%";
    document.body.style.overflowY = "auto"
})

const url = "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const apiKey = "2b36b289-3d47-420f-92a4-d44e116c9753";

const headers = new Headers();
headers.append("X-CMC_PRO_API_KEY", apiKey);

const requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

const fetchData = async () => {
  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const result = await response.json();
    
    const top4 = result.data.slice(0, 4);

    top4.forEach((crypto, index) => {
      document.querySelector(`#card${index + 1} .crtPrice`).innerText = crypto.quote.USD.price.toFixed(2);
      document.querySelector(`#card${index + 1} .crtName`).innerText = crypto.name;
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  fetchData();
});