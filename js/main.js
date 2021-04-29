const randomiseArray = function (input) {
    return Math.floor(Math.random() * input.length);
};

const randomiseNum = function (input) {
    return Math.floor(Math.random() * input);
};

let height = $( window ).height();
let width = $( window ).width();

let wordsOnPage = $('#story').text().trim().split(/\W+/);

let showRandomWord = function () {

  setTimeout(function(){

    let randomWord = wordsOnPage[randomiseArray(wordsOnPage)];

    let word = $('#random-word').text(randomWord).attr('style', `top: ${randomiseNum(height)}px; left: ${randomiseNum(width)}px; color: rgba(${randomiseNum(250)}, ${randomiseNum(250)}, ${randomiseNum(250)}, 1)`);

    word.fadeIn(1000).fadeOut(1000);

  }, 100);

  setTimeout(function(){

    $('#random-word').text('').fadeOut(1000);

  }, 1000);

  setTimeout(function(){

    showRandomWord();

  }, 2000);

};

showRandomWord();
