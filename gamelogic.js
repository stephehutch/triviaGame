$(document).ready(function () {

  const questionArray = [
    //Q[0]
    [["DEAD PERSON: I’m not dead!"],
    ["CORPSE COLLECTOR: Here, he says he’s not dead!"],
    ["CUSTOMER: Yes he is."],
    ["DEAD PERSON: I’m not!"],
    ["CORPSE COLLECTOR: He isn’t."],
    ['CUSTOMER: Well, he will be soon. He’s very ill'],
    ["DEAD PERSON:"]],

    //Q[1]
    [['ARTHUR: You are indeed brave, sir knight, but the fight is mine.'],
    ['BLACK KNIGHT: Oh, had enough, eh?'],
    ['ARTHUR: Look, you stupid bastard, you’ve got no arms left.'],
    ['BLACK KNIGHT: Yes I have.'],
    ['ARTHUR: Look! ']],

    //Q[2]
    [['BEDEVERE: Tell me, what do you do with witches?'],
    ['VILLAGER #2: Buuuurn them!'],
    ['CROWD: Burn! Burn them up!'],
    ['BEDEVERE: And what do you burn apart from witches?']],

    //Q[3]
    [['ARTHUR: If you will not show us the Grail, we shall take your castle by force!'],
    ['GUARD: You don’t frighten us, English pig-dogs! Go and boil your bottoms, sons of a silly person....']],

    //Q[4]
    [['HEAD KNIGHT: We are now...no longer the Knights Who Say Ni.'],
    ['OTHER KNIGHT OF NI: Ni!'],
    ['HEAD KNIGHT: Shh shh. We are now the Knights Who Say...']],

    ///Q[5]
    [['LAUNCELOT: Ask me the questions, Bridge Keeper. I’m not afraid!'],
    ['KEEPER: What...is your name?'],
    ['LAUNCELOT: My name is Sir Launcelot of Camelot.'],
    ['KEEPER: What...is your quest?'],
    ['LAUNCELOT: To seek the Holy Grail.'],
    ['KEEPER: What...is your favorite color?']]
  ];

  //All the A answers
  const choice1 = ['I feel happy... I feel happy!', ' Right! I’ll do you for that!', 'VILLAGER #1: More witches!', "I fffart in your general direction!", 'Kiki-Niki-Miki-Ning-Floop-Ding-Zoo-Mudruminidun...', 'Yellow']

  const choice2 = [' Uh, I-I think uh, I could pull through, sir', 'I’ve hurt worse.', 'ARTHUR: A duck!', "I blow my nose on you, so-called Arthur-king, you and all your silly English kannnnniggets.", "Inky-Blinky-Pinky-Peo-Link-Gelacica-Vibranium....", "Blue"]
  const choice3 = ['I’m getting better!', 'I’ll bite y’ legs off!', "VILLAGER #3: Very small rocks.", "Your mother was a hamster, and your father smelt of elderberries!", 'Ecky-Ecky-EckyEcky-Pikang-Zoom-Boing-Gumzowehzeh...', 'Red']
  const choice4 = ['I feel fine!', 'Just a flesh wound.', 'VILLAGER #2: Wood!', "Now go away or I shall taunt you a second time-a!", "Neychi-Macki-No0ww-Ziiiing-Ling-Shrum-dumbzuno...!", 'Green']


  const correctAnsArray = ['I’m getting better!', 'Just a flesh wound.', 'VILLAGER #1: More witches!', 'I blow my nose on you, so-called Arthur-king, you and all your silly English kannnnniggets.', 'Ecky-Ecky-EckyEcky-Pikang-Zoom-Boing-Gumzowehzeh...', "Blue"]

  const picArray = [
    "bringOutYourDead.gif",
    "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr06/2013/7/18/10/anigif_enhanced-buzz-7339-1374156681-28.gif",
    "https://thumbs.gfycat.com/EarlyHonoredHellbender-size_restricted.gif",
    "https://i.pinimg.com/originals/e6/9d/d2/e69dd267d85d7418e7c4caca3bb11a8e.gif",
    "https://i.pinimg.com/originals/1d/11/2a/1d112a01cc21afef6d536c562fe146e8.gif",
    "https://i.gifer.com/KKAX.gif"
  ];

  let q = 0; //pulls all question and realted things from their arraws. Very important!
  let number =  76;  //Set time on countdown
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
    $('#line').empty();
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
    //  console.log(number)
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
    $('img').hide();
    number = 76;
    resetQ();
    runTimer();

    // populates dynamic divs
    for (i = 0; i < questionArray[q].length; i++) {
      //  console.log(questionArray[q][i]);
      $('#line').append('<br>')
      $('#line').append(questionArray[q][i]);
    }

    console.log("Question: " + q);

    $('#a').text(choice1[q]);
    $('#b').text(choice2[q]);
    $('#c').text(choice3[q]);
    $('#d').text(choice4[q]);
    timesUp = setTimeout(getAns, 75 * 1000);

  };

  //Shows answer and current score
  function getAns() {
    resetQ()
    $('img').show();
    $("#timeR").hide();

    // shows currect score
    $('#correctans').text("The correct answer was: " + correctAnsArray[q]);
    $('#correct').text('Correct Ansors: ' + Correct);
    $('#wrong').text('Wrong Ansors: ' + Incorrect);
    $('img').attr("src", picArray[q])

    //increments to next question. Very Important!!!
    q++

    console.log("Answer: " + q);
    //if there are no more questions, allow player to reset the game
    if (q >= 6) {
      $('#question').text("Click to Play Again!")
      $("#start").show();
    } else {
      nextQ = setTimeout(getQuestion, 7 * 1000);
    }
  };




  // the start button calls the above functions
  $("#start").click(function () {
    q = 0; // resets q to zero when restarting
    $(this).hide();
    $("#instructions").hide();
    getQuestion()

    // checks if the answer choice is equal to the correct answer and changes score
  });

  $(".choice").click(function () {
    console.log("click")
    if (this.textContent === correctAnsArray[q]) {
      Correct++;
    } else {
      Incorrect++;
    }
    getAns()
  });
});

