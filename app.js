function selectColor(){
    Cookies.set(`selection`, `Colors`)
}
document.getElementById(`color`).addEventListener(`click`, selectColor)

function selectPokemon(){
    Cookies.set(`selection`, `Pokemon`)
}
document.getElementById(`pokemon`).addEventListener(`click`, selectPokemon)

function selectDrinks(){
    Cookies.set(`selection`, `Drinks`)
}
document.getElementById(`drinks`).addEventListener(`click`, selectDrinks)

// location.href = `selection.html`