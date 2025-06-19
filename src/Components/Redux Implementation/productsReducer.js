import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    products:[{title:"first Prodcut"}]
}
const productsSlice= createSlice({
    initialState,
    name:'products',
    reducers:{
        'add':(state,action)=>{
            state.products=[...state.products,{
                title:action.payload.title
            }]
        }
    }
})

export const productsReducer= productsSlice.reducer
export const productsActions= productsSlice.actions;
export const productsSelector= (state)=>state.productsReducer;
