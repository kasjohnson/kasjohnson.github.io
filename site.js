
alert('Hello!')

//get date
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

//create array with message strings
const welcomeMsg =['Good Morning!', 'Good Afternoon!', 'Good Evening!']

//select div in HTML and create h2 within it
const divWelcome = document.querySelector('#welcome')
const h2 = document.createElement('h2')

if (isMorning){
    h2.textContent = welcomeMsg[0]
}
else if (isAfternoon){
    h2.textContent = welcomeMsg[1]
}
else{
    h2.textContent = welcomeMsg[2]
}

//append welcome message to h2
divWelcome.append(h2)

