$(document).ready(function () {

  let questionArray = ['what is your name?', 'what is your quest?', 'what is your favorate color?', 'what is the capital of asseria?', 'what is the traveling velocity of an unladen swollow?']

  let choice1 = ['Arther: King of the Britens', 'to seek the holy grraaale', 'blue', "I don't know that", 'African']
  let choice2 = ['Lansolot', 'to seek the holy grraaale', 'red', "I don't know that", "or"]
  let choice3 = ['Galahad', 'to seek the holey grale', "yellow", "I don't know that", 'European?',]
  let choice4 = ['Sir Robben', "We've alredy got one", "Five", "I don't know that", "AAAAAAAAAAAAAAAAAAAA"]
  const correctAnsArray = ['Arther: King of the Britens', 'to seek the holey grale', 'red', "I don't know that", "AAAAAAAAAAAAAAA!"]

  let q = 0; //pulls all question and realted things from their arraws. Very important!
  let number = 11;  //Set time on countdown
  let intervalId;  //holder for timer interval
  let nextQ;     //holder for next question timeout
  let timesUp;  //holder for answer timeout
  let Correct = 0;  //counts correct answers
  let Incorrect = 0;  //counts incorrect answers

  //  stops timer
  function stop() {
    clearInterval(intervalId);
  }

  // resets all dynamic divs and stops timer and intervals
  function resetQ() {
    clearTimeout(nextQ);
    clearTimeout(timesUp);
    $('#question').empty();
    $('#correctans').empty();
    $('#a').empty();
    $('#b').empty();
    $('#c').empty();
    $('#d').empty();
    $('#correct').empty();
    $('#wrong').empty();
    stop();
  };

  function Timer() {
    $("#timeR").show();
    //  Decrease number by one.
    number--;
    console.log(number)
    //  Show the number in the #show-number tag.
    $("#countDown").text(number);
    //  Once number hits zero...
    if (number <= 0) {
      stop()
      getAns()
    }
  }

  // sets interval for timer
  function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(Timer, 1000);
  }

  // pulls up question and starts timer
  function getQuestion() {
    number = 11;
    resetQ();
    runTimer();

    // populates dynamic divs
    $('#question').text(questionArray[q]);
    $('#a').text(choice1[q]);
    $('#b').text(choice2[q]);
    $('#c').text(choice3[q]);
    $('#d').text(choice4[q]);
    timesUp = setTimeout(getAns, 10 * 1000);

  };

  //Shows answer and current score
  function getAns() {
    resetQ()
    $("#timeR").hide();

    // shows currect score
    $('#correctans').text("The correct answer was: " + correctAnsArray[q]);
    $('#correct').text('Correct Ansors: ' + Correct);
    $('#wrong').text('Wrong Ansors: ' + Incorrect);

    //increments to next question. Very Important!!!
    q++

    //if there are no more questions, allow player to reset the game
    if (q >= 5) {
      $('#question').text("Click to Play Again!")
      $("#start").show();
    } else {
      nextQ = setTimeout(getQuestion, 5 * 1000);
    }
  };




  // the start button calls the above functions
  $("#start").click(function () {
    q = 0; // resets q to zero when restarting
    $(this).hide();
    getQuestion()

    // checks if the answer choice is equal to the correct answer and changes score
    $(".choice").click(function () {
      if (this.textContent === correctAnsArray[q]) {
        Correct++;
      } else {
        Incorrect--;
      }
      getAns()
    });
  });
});



  //I wanted to loop through the arraw to create the questions, but I coun't figure out how to make them each clickable.
      //const answerArray = [['Arther: King of the Britens', 'Lansolot', 'Galahad', 'Sir Robben'], 
                           //['To seek the holy grale', 'to seek the holy grraaale', 'to seek the holey grale', "We've alredy got one"], 
                           //['blue', 'red', 'yellow', "no wait"], 
                           //["I don't know that", "I don't know that", "I don't know that", "I don't know that"], 
                           //['African', 'or', 'European?', "I don't know that!"]]

    //  $('#question').text(questionArray[q])
    //   for (i = 0; i < answerArray[q].length; i++) {
    //     console.log(answerArray[q][i]);
    //     $('#answers').append('<br>')
    //     $('#answers').append(answerArray[q][i]);
    //  }