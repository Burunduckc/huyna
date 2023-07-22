import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    num: 0
}

const mySlice = createSlice({
    name: 'justSlice',
    initialState,
    reducers: {
        increment (state) {
            state.num += 1
        },
        decrement (state) {
            if(state.num > 0){
                state.num -= 1
            }
        },
        reset (state) {
            state.num = 0
        }
    }
})

export const {increment, reset, decrement} = mySlice.actions
export default mySlice.reducer