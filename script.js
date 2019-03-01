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
        .then(responseJson => makeDogArray(responseJson)).then(displayResults)
            .catch(error => alert('Something went wrong. Try again later.'));
}

function makeDogArray(responseJson){
    store.dogArray = responseJson.message;
    console.log(store.dogArray);
   
}

function makeHtml(){
    let newArr=[];
    for(let x = 0; x < store.dogArray.length; x++){
        newArr.push(`<img src="${store.dogArray[x]}" class="results">`)
}
   return newArr;
}    

function displayResults(responseJson){
    $('.results').replaceWith(makeHtml())}


$(function() {
    console.log('App loaded! good job!');
    watchForm();
    
  });