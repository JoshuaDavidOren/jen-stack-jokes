console.log('client.js sourced');

$(document).ready(onReady);

function onReady() {
    console.log('DOM ready');
    getArray()
}
// let jokes = [
//   {
//     whoseJoke: "Luke",
//     jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
//     punchLine: "Do you know how to drive this thing?"
//   }
// ];

function getArray() {
    $.ajax({
            method: 'GET',
            url: '/funny'
        })
        .then(function(jokes) {
            console.log('Knock Knock, array', jokes);
            renderMyArray(jokes);
        })
        .catch(function(error) {
            console.log('can not GET', error);
        });
}
renderMyArray(array) {
    console.log(array[1]);
}