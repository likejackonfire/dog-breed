// // Create an app that lets users choose to display between 1 and 50 random dog images, 
// then prints the results to the console. 
// The app should feature a form with a required input where users indicate the number of images to retrieve,
// the input should default to 3. Use the endpoint described in the "DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION" 
// section of this page of the DogAPI docs.

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


function watchForm(){
    // // this function listens to the input element in the html. 
    // default is set to three, user can choose between 1 and 50  
    $('form').on('submit', function(event){
        event.preventDefault();
        const userNumber= $('.number-value').val();
        console.log(number);
        validateNumber(userNumber);
        getDogImages(userNumber);
    })

}

function renderHtml(){

}

$(function() {
    console.log('App loaded! good job!');
    watchForm();
    
  });