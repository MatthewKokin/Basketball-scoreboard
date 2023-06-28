const HomeOneBtn =document.getElementById("HomeOneBtn")
const HomeTwoBtn =document.getElementById("HomeTwoBtn")
const HomeThreeBtn =document.getElementById("HomeThreeBtn")

const GuestOneBtn =document.getElementById("GuestOneBtn")
const GuestTwoBtn =document.getElementById("GuestTwoBtn")
const GuestThreeOneBtn =document.getElementById("GuestThreeOneBtn")

const scoreHome =document.getElementById("scoreHome")
const scoreGuests =document.getElementById("scoreGuests")

let countHome = 0
let countGuests = 0

// ----------------------------Home Score------------------------
function HincrementOne(){
    countHome += 1
    scoreHome.innerText = countHome
}

function HincrementTwo(){
    countHome += 2
    scoreHome.innerText = countHome
}

function HincrementThree(){
    countHome += 3
    scoreHome.innerText = countHome
}


// ----------------------------Home Score------------------------
function GincrementOne(){
    countGuests += 1
    scoreGuests.innerText = countGuests
}

function GincrementTwo(){
    countGuests += 2
    scoreGuests.innerText = countGuests
}

function GincrementThree(){
    countGuests += 3
    scoreGuests.innerText = countGuests
}