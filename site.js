
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



//Assignment 4- Secret Message

//put in local storage
const key = "It's a secret to everybody."
localStorage.setItem(key, "How do you follow Will Smith in the snow? Answer: You follow the fresh prints.")
//localStorage.getItem(key)



//Assignment 5- Carousel
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()



const previousBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

previousBtn.addEventListener('click', () => {
    currentImage --
    showImages()
})

nextBtn.addEventListener('click', ()=> {
    currentImage ++
    showImages()
})

setInterval(()=>{
    currentImage ++
    showImages()
},2000)