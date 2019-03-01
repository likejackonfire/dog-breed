'use strict';

const store = {
    number: 0,
    dogArray:[],
}

function watchForm(){
    // // this function listens to the input element in the html. 
    // default is set to three, user can choose between 1 and 50  
   
    $('form').on('submit', function(event){
        event.preventDefault();
        store.number= $('.number-value').val();
        console.log(store.number);
        getDogImages(store.number);
    })
}

function getDogImages(num){
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
            .catch(error => alert('Something went wrong. Try again later.'));
}

function makeDogArray(jsonObj){
    store.dogArray = jsonObj;
    console.log('ok');
}

function makeHtml(){
    for(let x = 0; x < store.dogArray.length; x++){
        store.dogArray.push(`<img src="${store.dogArray[x]}" class="results">`)
}
    return store.dogArray.join('');
}    

function displayResults(responseJson){
    $('.results').replaceWith(
        `<img src="${responseJson.message}" class="results">`
    )}






$(function() {
    console.log('App loaded! good job!');
    watchForm();
    
  });