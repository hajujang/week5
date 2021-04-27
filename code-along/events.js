// // Get a reference to the page title element from the DOM
// let pageTitleElement = document.querySelector(`.page-title`)

// // Modify the page title element's contents
// pageTitleElement.innerHTML = `Movies to watch!`

// // Get a reference to the bulleted list of movies
// let movieList = document.querySelector(`.movies-to-watch`)

// // Add an new list item to the bulleted list of movies
// movieList.insertAdjacentHTML(`beforeend`, `
//   <li>Spaceballs</li>
// `)

// // Get a reference to the image
// let image = document.querySelector(`img`)

// // Add the `border-pink-500` class to the image element
// image.classList.add(`border-pink-500`)

// Get a reference to the "Click me" button
let clickMeButton = document.querySelector(`.click-me`)

// Event listener for the "clink me" button (`what event?`, `function that we want to operate`)
clickMeButton.addEventListener(`click`, async function(event){
  // Get a reference to the page title element from the DOM
  let pageTitleElement = document.querySelector(`.page-title`)

  // Modify the page title element's contents
  pageTitleElement.innerHTML = `Movies to watch!`
})

// Get a reference to the "add movie" link
let addMovieLink = document.querySelector(`.add-movie`)

// Event listner for the  "add movie" link
addMovieLink.addEventListener(`click`, async function(event) {
  // Prevent the link's default behavior (which is to go to Google)
  event.preventDefault()

  // Get a reference to the bulleted list of movies
  let movieList = document.querySelector(`.movies-to-watch`)

  // Add an new list item to the bulleted list of movies
  movieList.insertAdjacentHTML(`beforeend`, `
    <li>Spaceballs</li>
  `)
})

// Get a reference to the "zoom image" button
let zoomImageButton= document.querySelector(`.zoom-image`)

// Event Listenr for the "zoom image" button
zoomImageButton.addEventListener(`click`, async function(event){
  // Get a reference to the image
  let image = document.querySelector(`img`)

  // Add the `border-pink-500` class to the image element
  image.classList.add(`border-pink-500`)

  // Make the image larger
  image.classList.remove(`w-96`) // or you can use clssList.toggle for both of these line
  image.classList.add(`w-full`) // or you can use clssList.toggle for both of these line
})

// Get a refence to the "change image" buton
let changeImageButton = document.querySelector(`.change-image`)

// Event listner for the "change image" button
changeImageButton.addEventListener(`click`, async function(event){
  // Get a reference to the image
  let image = document.querySelector(`img`)

  // Change the image (attribute of an element)
  image.setAttribute(`src`, `../images/grogu2.jpg`)  
})

// Get a reference to the "say hi" button
let sayHiButton = document.querySelector(`.say-hi`)

// Event listenr for the "say hi" button
sayHiButton.addEventListener(`click`, async function(event){
  // Prevent the default behavior
  event.preventDefault()

  // Get a reference to the input field that holds the first name
  let nameInput = document.querySelector(`#first-name`)
  // Get the value from the input field
  let firstName = nameInput.value 
  // Get a reference to the "greet" element
  let greetElement = document.querySelector(`.greet`)

  // First name should have value
  if (firstName.length>0) {
    // Create a sentence to put in the "greet" element
    let sentence = `Hi, ${firstName}`
   // Set the "greet" element's HTML to the sentence
    greetElement.innerHTML = sentence
  } else {
    greetElement.innerHTML = ``
  }
})

