const searchBox = document.getElementById("search-box")
const searchBtn = document.getElementById("search-submit-btn")
const searchMenu = document.getElementById("search-menu")

const url = "https://restcountries.com/v3.1/all"
const regex = new RegExp(/S/gm);

searchBox.addEventListener('input', (e) => {
  let val = e.target.value;

})

fetch(url)
.then((res) => {
  return res.json()
})
.then((result) => {
  country = result.map((entry) => {
    return {name: entry.name.common}
  })
})
.catch((err) => {
  console.error(err)
}) 

searchBtn.addEventListener("click", () =>{})

  