/*Add your JavaScript here*/
var airScore=0;
var earthScore=0;
var fireScore=0;
var waterScore=0;

var questionCount=0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var display=document.getElementById("display");
var result=document.getElementById("result");
var restart=document.getElementById("restart");


function air(){
  airScore+=1
  questionCount+=1
  console.log("Question Count: "+questionCount+" Air Score: "+airScore+" Earth Score: "+earthScore+" Water Score: "+waterScore+" Fire Score: "+fireScore);

  
}

function earth(){
  earthScore+=1
  questionCount+=1
  console.log("Question Count: "+questionCount+" Air Score: "+airScore+" Earth Score: "+earthScore+" Water Score: "+waterScore+" Fire Score: "+fireScore);

}

function water(){
  waterScore+=1
  questionCount+=1
  console.log("Question Count: "+questionCount+" Air Score: "+airScore+" Earth Score: "+earthScore+" Water Score: "+waterScore+" Fire Score: "+fireScore);

}

function fire(){
  fireScore+=1
  questionCount+=1
  console.log("Question Count: "+questionCount+" Air Score: "+airScore+" Earth Score: "+earthScore+" Water Score: "+waterScore+" Fire Score: "+fireScore);
}

function disableQ1() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
}

function disableQ2() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
}

function disableQ3() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
}

function disableQ4() {
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
}

function disableQ5() {
  document.getElementById("q5a1").disabled = true;
  document.getElementById("q5a2").disabled = true;
  document.getElementById("q5a3").disabled = true;
  document.getElementById("q5a4").disabled = true;
}

function resultDisplay(){
  if(questionCount==5){
    console.log("The quiz is over!");
  

    if(airScore>=3){
      result.innerHTML="Your zodiac element is Air: Aquarius / Libra / Gemini";
      console.log("Your zodiac element is Air: Aquarius / Libra / Gemini");
    }
  
    else if(airScore==2){
      if(earthScore==2){
        result.innerHTML="Your zodiac element is Air: Aquarius / Libra / Gemini OR Earth: Taurus / Capricorn / Virgo";
        console.log("Your zodiac element is Air: Aquarius / Libra / Gemini OR Earth: Taurus / Capricorn / Virgo");
      }
      else if(waterScore==2){
        result.innerHTML="Your zodiac element is Air: Aquarius / Libra / Gemini OR Water: Pisces / Cancer / Scorpio";
        console.log("Your zodiac element is Air: Aquarius / Libra / Gemini OR Water: Pisces / Cancer / Scorpio");
      }
      else if(fireScore==2){
        result.innerHTML="Your zodiac element is Air: Aquarius / Libra / Gemini OR Fire: Saggitarius / Leo / Aries";
        console.log("Your zodiac element is Air: Aquarius / Libra / Gemini OR Fire: Saggitarius / Leo / Aries");
      }
      else{
        result.innerHTML="Your zodiac element is Air: Aquarius / Libra / Gemini";
        console.log("Your zodiac element is Air: Aquarius / Libra / Gemini");
      }
    }
  
    else if(earthScore>=3){
      result.innerHTML="Your zodiac element is Earth: Taurus / Capricorn / Virgo";
      console.log("Your zodiac element is Earth: Taurus / Capricorn / Virgo");
    }
  
    else if(earthScore==2){
      if(waterScore==2){
        result.innerHTML="Your zodiac element is Earth: Taurus / Capricorn / Virgo OR Water: Pisces / Cancer / Scorpio";
        console.log("Your zodiac element is Earth: Taurus / Capricorn / Virgo OR Water: Pisces / Cancer / Scorpio");
      }
      else if(fireScore==2){
        result.innerHTML="Your zodiac element is Earth: Taurus / Capricorn / Virgo OR Fire: Saggitarius / Leo / Aries";
        console.log("Your zodiac element is Earth: Taurus / Capricorn / Virgo OR Fire: Saggitarius / Leo / Aries");
      }
      else{
        result.innerHTML="Your zodiac element is Earth: Taurus / Capricorn / Virgo";
        console.log("Your zodiac element is Earth: Taurus / Capricorn / Virgo"); 
      }
    }
  
    else if(waterScore>=3){
      result.innerHTML="Your zodiac element is Water: Pisces / Cancer / Scorpio";
      console.log("Your zodiac element is Water: Pisces / Cancer / Scorpio");
    }
  
    else if(waterScore==2){
      if(fireScore==2){
        result.innerHTML="Your zodiac element is Water: Pisces / Cancer / Scorpio OR Fire: Saggitarius / Leo / Aries";
        console.log("Your zodiac element is Water: Pisces / Cancer / Scorpio OR Fire: Saggitarius / Leo / Aries");
      }
      else{
        result.innerHTML="Your zodiac element is Water: Pisces / Cancer / Scorpio";
        console.log("Your zodiac element is Water: Pisces / Cancer / Scorpio");
      }
    }
  
    else{
      result.innerHTML="Your zodiac element is Fire: Saggitarius / Leo / Aries";
      console.log("Your zodiac element is Fire: Saggitarius / Leo / Aries");
    }
  }

  else{
    result.innerHTML="Click the Button After Completing All the Questions!";
  }
}

function restartButton(){
  result.innerHTML="Your result is...";
  airScore=0;
  earthScore=0;
  fireScore=0;
  waterScore=0;
  questionCount=0;
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q2a4").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q3a4").disabled = false;  
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q4a4").disabled = false;
  document.getElementById("q5a1").disabled = false;
  document.getElementById("q5a2").disabled = false;
  document.getElementById("q5a3").disabled = false;
  document.getElementById("q5a4").disabled = false;
}

q1a1.addEventListener("click",air);
q1a2.addEventListener("click",earth);
q1a3.addEventListener("click",water);
q1a4.addEventListener("click",fire);

q2a1.addEventListener("click",air);
q2a2.addEventListener("click",earth);
q2a3.addEventListener("click",water);
q2a4.addEventListener("click",fire);

q3a1.addEventListener("click",air);
q3a2.addEventListener("click",earth);
q3a3.addEventListener("click",water);
q3a4.addEventListener("click",fire);

q4a1.addEventListener("click",air);
q4a2.addEventListener("click",earth);
q4a3.addEventListener("click",water);
q4a4.addEventListener("click",fire);

q5a1.addEventListener("click",air);
q5a2.addEventListener("click",earth);
q5a3.addEventListener("click",water);
q5a4.addEventListener("click",fire);

display.addEventListener("click",resultDisplay)
restart.addEventListener("click",restartButton)