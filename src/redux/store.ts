import { configureStore } from "@reduxjs/toolkit";
import justSlice from './slice/mySlice'
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux/es/exports";
const store = configureStore({
    reducer: {
        justSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()