console.log('client.js sourced');

$(document).ready(onReady);

function onReady() {
    console.log('DOM ready');
    getArray();
    $('#addJokeButton').on('click', newJoke);
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

function renderMyArray(array) {
    console.log(array[1]);
    $('#outputDiv').empty();
    for (let joke in array) {

        $('#outputDiv').prepend(`
        <div>
        <li>Joke: ${array[joke].jokeQuestion}
        <li>Punch line: ${array[joke].punchLine} 
        <li> By: ${array[joke].whoseJoke}</li>
        </div`)
    }
}

function newJoke() {
    console.log('Sending new joke');
    console.log($('#punchLineIn').val());
    $.ajax({
            method: 'POST',
            url: '/funny',
            data: {
                whoseJoke: $('#whoseJokeIn').val(),
                jokeQuestion: $('#questionIn').val(),
                punchLine: $('#punchlineIn').val(),
            }
        })
        .then(function() {
            console.log('Joke sent');
            getArray();
        })
        .catch(function(error) {
            alert('You can do this Joshua');
        });

    $('#whoseJokeIn').val(''),
        $('#questionIn').val(''),
        $('#punchlineIn').val('')
};