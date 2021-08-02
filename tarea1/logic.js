// MIT License
// Copyright (c) 2020 Luis Espino

var state1=0, state2=0, state3=0, state4=0, state5=0, state6=0, state7=0, state8=0;




function reflex_agent(location, state) {
  

  if (state == "DIRTY") {
    if (location == "A") {
      document.getElementById("trash-a").classList.add("d-none");
    } else {
      document.getElementById("trash-b").classList.add("d-none");
    }
    return "CLEAN";
  } else if (location == "A") {
    document.getElementById("vacum-b").classList.remove("d-none");
    document.getElementById("vacum-a").classList.add("d-none");
    return "RIGHT";
  } else if (location == "B") {
    document.getElementById("vacum-a").classList.remove("d-none");
    document.getElementById("vacum-b").classList.add("d-none");
    return "LEFT";
  }
}

function updateStateCount(state){
  // var state = ["A", "DIRTY", "DIRTY"];
  if(state[0]==="A"){
    if(state[1] === "DIRTY" && state[2] === "DIRTY"){
      state1++;
      console.log("Estado 1 Visitas: " + state1);
      window.document.getElementById("state1").innerHTML = state1;
      if(state1>=2)
        window.document.getElementById("state1").classList.add("success-state");
      
    }else if(state[1] === "DIRTY" && state[2] === "CLEAN"){
      state3++;
      window.document.getElementById("state3").innerHTML = state3;
      if(state3>=2)
        window.document.getElementById("state3").classList.add("success-state");
      console.log("Estado 3 Visitas: " + state3);
    }else if(state[1] === "CLEAN" && state[2] === "DIRTY"){
      state5++;
      window.document.getElementById("state5").innerHTML = state5;
      if(state5>=2)
        window.document.getElementById("state5").classList.add("success-state");
      console.log("Estado 5 Visitas: " + state5);
    }else if(state[1] === "CLEAN" && state[2] === "CLEAN"){
      state7++;
      window.document.getElementById("state7").innerHTML = state7;
      if(state7>=2)
        window.document.getElementById("state7").classList.add("success-state");
      console.log("Estado 7 Visitas: " + state7);
    }

  }else if(state[0]==="B"){
    if(state[1] === "DIRTY" && state[2] === "DIRTY"){
      state2++;
      window.document.getElementById("state2").innerHTML = state2;
      if(state2>=2)
        window.document.getElementById("state2").classList.add("success-state");
      console.log("Estado 2 Visitas: " + state2);
    }
    else if(state[1] === "DIRTY" && state[2] === "CLEAN"){
      state4++;
      window.document.getElementById("state4").innerHTML = state4;
      if(state4>=2)
        window.document.getElementById("state4").classList.add("success-state");
      console.log("Estado 4 Visitas: " + state4);
    }
    else if(state[1] === "CLEAN" && state[2] === "DIRTY"){
      state6++;
      console.log("Estado 6 Visitas: " + state6);
      window.document.getElementById("state6").innerHTML = state6;
      if(state6>=2)
        window.document.getElementById("state6").classList.add("success-state");
    }else if(state[1] === "CLEAN" && state[2] === "CLEAN"){
      state8++;
      window.document.getElementById("state8").innerHTML = state8;
      if(state8>=2)
        window.document.getElementById("state8").classList.add("success-state");
      console.log("Estado 8 Visitas: " + state8);
    }
    
  }
}


function getDirt(states) {
  if (states[1] == "CLEAN" && Math.floor(Math.random() * 10) > 7) {
    states[1] = "DIRTY";
    document.getElementById("trash-a").classList.remove("d-none");
    //Logging
    let child = document.createElement("p");
    child.innerHTML = `Location: A | Action get Dirt`;
    document.getElementById("log").prepend(child);
  }
  if (states[2] == "CLEAN" && Math.floor(Math.random() * 10) < 5) {
    states[2] = "DIRTY";
    document.getElementById("trash-b").classList.remove("d-none");
    // get dirt loggin
    let child = document.createElement("p");
    child.innerHTML = `Location: B | Action get Dirt`;
    document.getElementById("log").prepend(child);
  }
  console.log(states);
  updateStateCount(states);
}

function test(states) {
  var location = states[0];
  var state = states[0] == "A" ? states[1] : states[2];
  var action_result = reflex_agent(location, state);
  let child = document.createElement("p");
  child.innerHTML = `Location: ${location} | Action ${action_result}`;
  document.getElementById("log").prepend(child);
  if (action_result == "CLEAN") {
    if (location == "A") states[1] = "CLEAN";
    else if (location == "B") states[2] = "CLEAN";
  } else if (action_result == "RIGHT") states[0] = "B";
  else if (action_result == "LEFT") states[0] = "A";
  setTimeout(function () {
    test(states);
    getDirt(states);
  }, 2000);
}

var states = ["A", "DIRTY", "DIRTY"];
test(states);
