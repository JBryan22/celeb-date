$(document).ready(function(){
  $("#sub").click(function(){
  var outdoor = $("#outdoor").val();
  var food = $("#food").val();
  var allergyTo = $("#allergic").val();
  var boy1 = 0;
  var boy2 = 0;
  var boy3 = 0;

  if (outdoor === "Swimming") {
    boy1 += 1;
  } else if (outdoor === "Hiking") {
    boy2 += 1;
  } else {
    boy3 += 1;
  }

  if (food === "Pasta") {
    boy1 += 1;
  } else if (food === "Burger") {
    boy2 += 1;
  } else {
    boy3 += 1;
  }

  if (allergyTo === "Peanuts") {
    boy1 += 1;
  } else if (allergyTo === "Dairy") {
    boy2 += 1;
  } else {
    boy3 += 1;
  }

  if (boy1 > boy2 && boy1 > boy3){
    alert("You are going to date boy1!");
  }else if(boy2 > boy1 && boy2 > boy3){
    alert("You are going to date boy2!");
  }else{
    alert("You are going to date boy3!");
  }

});
});
