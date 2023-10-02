console.log('%c HI', 'color: firebrick')

//Challenge 1
//Add JavaScript that:
//on page load, fetches the images using the url above ⬆️
//parses the response as JSON
//adds image elements to the DOM for each 🤔 image in the array


let breeds = [];

document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  loadBreedOptions();
});

function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(res => res.json())
        .then(results => {
            results.message.forEach(image => addImage(image))
        });
}

function addImage(dogPicUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImageEl = document.createElement('img');
    newImageEl.src = dogPicUrl;
    container.appendChild(newImageEl);
  }

//Challenge 2
//After the first challenge is completed, add JavaScript that:
//on page load, fetches all the dog breeds using the url above ⬆️
//adds the breeds to the page in the <ul> provided in index.html

function loadBreedOptions() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
      .then(res => res.json())
      .then(results => {
  
        breeds = Object.keys(results.message);
        updateBreedList(breeds);
        addBreedSelectListener();
      });
  }


function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }
  
  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
//Challenge 3
//Once all of the breeds are rendered in the <ul>, add JavaScript, 
//so that, when the user clicks on any one of the <li>s, 
//the font color of that <li> changes. 
//This can be a color of your choosing.

function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }
  
  function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }

//Challenge 4
//Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdownLinks to an external site..
//For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. 
//For simplicity, the dropdown only includes the letters a-d.

  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }


















/*

    //.then(animalData => animalData.forEach(animal => rendreOneAnimal(animal))

    card.innerHTML = ` 
        <img src="${dogs.imageUrl}"> `
     /*
        <div class="content"> 
            <h4>${(dogs.name)}</h4> 
            <p> 
                $<span class="donation-count">${(dogs.donations)}</span> Donated 
            </p> 
            <p>${(dogs.donations)}</p> 
        </div> 
        <div class="buttons"> 
            <button> Donate $10 </button> 
            <button> Set Free </button> 
        </div> 
    ` */

/*
function dogBreed(e){
    e.preventDefault()
}
    */