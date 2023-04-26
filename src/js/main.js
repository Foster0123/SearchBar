const searchBox = document.getElementById("search-box")
const searchBtn = document.getElementById("search-submit-btn")
const searchMenu = document.getElementById("search-menu")
const form = document.getElementById("form")

const itemTemplate = document.querySelector("[data-search-item-template]")
const itemContainer = document.querySelector("[data-user-container]")

const url = "https://jsonplaceholder.typicode.com/users"

let users = []

searchBox.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    users.forEach(user => {
        const isVisible = 
        user.name.toLowerCase().includes(value) || 
        user.email.toLowerCase().includes(value)
        
        user.element.classList.toggle("hide", !isVisible)
    })
})

fetch(url)
    .then(res => res.json())
    .then(data => {
        users = data.map(item => {
            const card = itemTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            
            header.textContent = item.name
            body.textContent = item.email
            itemContainer.append(card)
            return { name: item.name, email: item.email, element: card }
        })
    
    })