import React, { useState } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counter/Reducer'
import Actions from './redux/counter/Actions.js'

const initialState = { value: 0 }
const [action_increment, action_decrement, action_reset] = Actions();

const actions = [action_increment(), action_increment(), action_increment()]
const finalResult = actions.reduce(counterReducer, initialState)
const store = configureStore({ reducer: counterReducer })
console.log(finalResult)
function Counter() {
    const [count, setCount] = useState(0)
    const increment = () => {
       return action_increment()
    }
    const incrementCounter = () => {
        console.log(increment)
        store.dispatch(increment())
        console.log(store.getState())
        setCount(store.getState().value)
        console.log(store.getState())
    }
    const selectCounterValue = state => state.value
    const currentValue = selectCounterValue(store.getState())
    console.log(currentValue)
    console.log(store.getState())
    return (
        <div>
            <button onClick={incrementCounter}>increment {count}</button>
        </div>
    )
}

export default Counter
