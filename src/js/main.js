const searchBox = document.getElementById("search-box")
const searchBtn = document.getElementById("search-submit-btn")
const searchMenu = document.getElementById("search-menu")

const url = "https://restcountries.com/v3.1/all"
const regex = new RegExp(/S/gm);



const data = fetch(url).then((res) => {
  return res.json()
}).then((result) => {
  return result
}).catch((err) => {
  console.error(err)
}) 
async function getData() {
  let result = await data;
  for(let i=0; i < result.length; i++){
    if(regex.test(searchBox.value)){
      const li = document.createElement("li")
      li.textContent = result[i].name.common
      searchMenu.appendChild(li)
    }
    else {
      console.log("no match")
    }
    
  }
}
searchBtn.addEventListener("click", getData())

  