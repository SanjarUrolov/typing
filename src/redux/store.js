import { configureStore } from "@reduxjs/toolkit"
import text from './textReducer'
export const store=configureStore({
   reducer:{
    text, 
   }
})