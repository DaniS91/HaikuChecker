const storeState = () => {  // store current stte of the object
  let currentState = {};  //current state will be mutated
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState); //this takes a given function and calls it on the currentState, saves that as a newState
    currentState = {...newState};  // this assigns the newState as the currentState
    return newState;  // this provides a snapshot of the current state
  }
}

const stateControl = storeState();

// this is a function factory
// we can create more specific functions that alter our object's properties

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value  // idk about this one, I feel like we will use slightly different logic here but idr
    });
  }
}

// now we need to create more specific functions that use the function factory? >>>>> we can inport our functions from haiku.js probably
// We could easily create many more.
// const feed = changeState("soil")(1);
// const blueFood = changeState("soil")(5);

// const hydrate = changeState("water")(1);
// const superWater = changeState("water")(5);

window.onload = function() {
  // this is where we will get input from the textbox in our html
  // then update the output from the state
  


  // This function doesn't actually do anything useful in this application 
  // — it just demonstrates how we can "look" at the current state 
  // (which the DOM is holding anyway). 
  // However, students often do need the ability to see the current state 
  // without changing it so it's included here for reference.
  document.getElementById('show-state').onclick = function() {
    // We just need to call stateControl() without arguments 
    // to see our current state.
    const currentState = stateControl();
  }
}