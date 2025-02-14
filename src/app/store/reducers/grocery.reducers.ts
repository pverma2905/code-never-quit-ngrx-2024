import { createReducer, on } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";
import { groceryAction } from "../actions/grocery.action";

// const initialState:Grocery[] =[
//     {"id":1,"name":"Milk","type":"fruit"},
//     {"id":2,"name":"Banana","type":"fruit"},
//     {"id":3,"name":"Lays Chips","type":"snacks"},
//     {"id":4,"name":"doritos","type":"snacks"}
// ]

const initialState:Grocery[] =[]

export const grocerReducer = createReducer(
    initialState,
    on(groceryAction.loadGroceriesSuccess,(state, action)=>{
        return action.payload
    }),
    on(groceryAction.loadGroceriesFailure,(state, action)=>{
        return []
    })
); 