function selectColor(){
    Cookies.set(`selection1`, `Colors`)
}
document.getElementById(`color`).addEventListener(`click`, selectColor)


function selectPokemon(){
    Cookies.set(`selection2`, `Pokemon`)
}
document.getElementById(`pokemon`).addEventListener(`click`, selectPokemon)


function selectDrinks(){
    Cookies.set(`selection3`, `Drinks`)
}
document.getElementById(`drinks`).addEventListener(`click`, selectDrinks)

// location.href = `selection.html`