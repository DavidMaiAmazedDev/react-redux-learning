  
  import React from 'react'
  
  function Actions() {
      
    return [action_increment, action_decrement, action_reset]
  }
  
  export default Actions
  
  

function action_increment(){
    return {
        type: type_increment
    }
}

const action_decrement = () => {
    return {
        type: type_decrement
    }
}

const action_reset = () => {
    return {
        type: type_reset
    }
}
const type_increment = 'counter/increment'
const type_decrement = 'counter/decrement'
const type_reset = 'counter/reset'

