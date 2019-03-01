'use strict';

const store = {
    number: 0,
}

function watchForm(){
    // // this function listens to the input element in the html. 
    // default is set to three, user can choose between 1 and 50  
    const userNumber = 3;
    $('form').on('submit', function(event){
        event.preventDefault();
        store.number= $('.number-value').val();
        console.log(store.number);
        getDogImages(store.number);
    })
}

function getDogImages(userNumber){
    fetch(`https://dog.ceo/api/breeds/image/random/${userNumber}`)
        .then(response => response.json())
        .then(responseJson => 
            displayResults(responseJson))
            .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson){
    console.log(responseJson);
    $('.results').replaceWith(
        `<img src="${responseJson.message}" class="results">`
      )

}

function validateNumber(num){
    // make sure number is between 1 and 50
}




$(function() {
    console.log('App loaded! good job!');
    watchForm();
    
  });