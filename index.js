import { menusData } from "./data.js";
let isPizzaOrderRender = false


document.addEventListener('click', function (e) {
    if (isPizzaOrderRender) {
        // e.target.dataset.pizzaprice
        // console.log(e.target.dataset.pizzaPrice)
        // console.log('pizza is rendered')
        pizzaPriceIncrement(e.target.dataset.pizzaPrice)
    } else {
        if (e.target.dataset.pizza) {
            handlePizzaClick(e.target.dataset.pizza)
        }
        isPizzaOrderRender = true
    }


    if (e.target.dataset.hamburger) {
        handleHamburgerClick(e.target.dataset.hamburger)
    } else if (e.target.dataset.beer) {
        handleBeerClick(e.target.dataset.beer)
    }
})

function pizzaPriceIncrement(pizzaPriceAdd) {

    const pizzaPrice = Number(pizzaPriceAdd)

    let newPizzaPrice = pizzaPrice

    newPizzaPrice += pizzaPrice
    console.log(Number(newPizzaPrice))

    document.getElementById('pizza-price').textContent = newPizzaPrice
}

let clickedArrayId = []

let choiceHtml = ``

function handlePizzaClick(pizzaId) {

    if (clickedArrayId.includes(pizzaId)) {
        console.log(pizzaId + 'present')
    } else {
        clickedArrayId.push(pizzaId)

    }

    const targetPizza = clickedArrayId.filter(function (click) {
        return click === pizzaId
    })[0]

    // console.log(targetPizza.includes(pizzaId))

    // if (targetPizza.includes(pizzaId)) {
    menusData.filter(function (menu) {
        if (menu.uuid === targetPizza) {
            return choiceHtml += `
                <div class="order-details">
                    <div class="order-title">
                        <h2>${menu.recipe}</h2>
                        <p class="remove">remove</p>
                    </div>
                    <p class="pice" id="pizza-price">${menu.price}</p>
                </div>
                `
        }

    })

    document.getElementById('clicked-orders').innerHTML = choiceHtml


}
function handleHamburgerClick(hamburgerId) {
    console.log(hamburgerId)

}
function handleBeerClick(beerId) {
    console.log(beerId)

}


console.log(menusData)


function getcontentHtml() {

    let contentHtml = ``
    menusData.forEach(function (menu) {
        contentHtml += `
        <div class="menu-list">
            <div class="menu-container">
                <img
                    src="image/${menu.image}"
                    alt="${menu.recipe} image"
                    class="menu-pic"
                />
                <div class="menu-details">
                    <h1>${menu.recipe}</h1>
                    <p>${menu.ingridient}</p>
                    <span class="price">$${menu.price}</span>
                </div>
            </div>
            <i class="fa fa-thin fa-circle-plus add-icon" data-${menu.recipe}="${menu.uuid}" data-pizza-price="${menu.price}"></i>
        </div>
        `
    })

    document.getElementById('main-menu').innerHTML = contentHtml
}

function render() {
    getcontentHtml()
}

render()



console.log(menusData.values)