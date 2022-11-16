// function makeCookies(event){
//     Cookies.set(`selection`, `Color`);
// }
// document.getElementById(`color`).addEventListener(`click`, makeCookies);

// function makeCookies(event){
//     Cookies.set(`selection`, `Pokemon`);
// }
// document.getElementById(`pokemon`).addEventListener(`click`, makeCookies);

// function makeCookies(event){
//     Cookies.set(`selection`, `Drinks`);
// }
// document.getElementById(`drinks`).addEventListener(`click`, makeCookies);

function SelectionMade(){
    let currentUser = Cookies.get(`selection`);
    if (currentUser == `Color`){
        Cookies.set(`selection`, `Pokemon`);
    } else if (currentUser == `Color`){
        Cookies.set(`selection`, `Drinks`)
    } else if (currentUser == `Drinks`){
        Cookies.set(`selection`, `Pokemon`)
    }
}

document.getElementById(`selections`).addEventListener(`click`, SelectionMade)

// location.href = `selection.html`