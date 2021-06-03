// MIT License
// Copyright (c) 2020 Luis Espino

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

function getDirt(states) {
  if (states[1] == "CLEAN" && Math.floor(Math.random() * 10) > 5) {
    states[1] = "DIRTY";
    document.getElementById("trash-a").classList.remove("d-none");
  } else if (states[2] == "CLEAN" && Math.floor(Math.random() * 10) < 5) {
    states[2] = "DIRTY";
    document.getElementById("trash-b").classList.remove("d-none");
  }
  console.log(states);
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
