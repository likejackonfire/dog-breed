'use strict';



function watchForm(){
    // // this function listens to the input element in the html. 
    // default is set to three, user can choose between 1 and 50  
    $('form').submit(function(event){
        event.preventDefault();
        const userNumber= $('.number-value').val();
        console.log(number);
        getDogImages(userNumber);
    })

}

function getDogImages(userNumber){
    fetch(`https://dog.ceo/api/breeds/image/random/${userNumber}`)
        .then(response => response.json())
            .then(responseJson => displayResults(responseJson))
}

function displayResults(){
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