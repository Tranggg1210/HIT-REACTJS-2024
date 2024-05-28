import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCounter: (state, actions) => {
            state.count += 1
        },
        decrementCounter: (state) => {
            state.count -= 1
        },
        multiCounter: (state, action) => {
            state.count *= action.payload
        },
        dividedCounter: (state, actions) => {
            state.count /= actions.payload
        },
        exponentialCounter:(state,action) =>{
            state.count **= action.payload
        },
        squareCounter: (state) => {
            state.count **= (1/2)
        },
        factorialCounter: (state) => {
            for(let i = state.count - 1; i > 0;i--){
                state.count *= i;
            }
        },
        dienTichHinhTron:(state,action)=>{
            state.count = Math.PI*((action.payload)**2)
        },
        phuongTrinhBacNhat:(state,action)=>{
            state.count = -state.count/action.payload;
        },
        phuongTrinhBac2: (state, action) => {
            const a = action.payload[0];
            const b = action.payload[1];
            const c = action.payload[2];

            const denta = b * b - 4 * a * c;
            if(denta < 0){
                state.count = 0;
            }
            if(denta == 0){
                state.count = -b / (2 * a);
            }
            if(denta > 0) {
                state.count = -b / a;
            }
        },
        hePhuongTrinhBac1: (state,action) => {
            console.log("sajdsj")
            const a = action.payload[0];
            const b = action.payload[1];
            const e = action.payload[2];
            const c = action.payload[3];
            const d = action.payload[4];
            const f = action.payload[5];

            const det = a*d - b*c;
            
            if(det===0){
                state.count = 0;
            }
            else{
                state.count = ((e*d - b*f)/det) + ((a*f - c*e)/det);
        }
            }
            

    }
})

export const {incrementCounter, decrementCounter, multiCounter, dividedCounter, exponentialCounter, squareCounter,factorialCounter,dienTichHinhTron, phuongTrinhBacNhat, phuongTrinhBac2,hePhuongTrinhBac1} = counterSlice.actions;
export default counterSlice.reducer;
