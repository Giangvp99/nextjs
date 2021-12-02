import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export default function AppWrapper({ children }) {
    const [sharedState, setShareState] = useState({
        products: []
    })

    return (
        <AppContext.Provider value={[sharedState, setShareState]}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
// import React,{createContext ,useReducer} from "react"
// 
// const initialState={
//     index:0
// }
// const Reducer=(state,action)=>{
//     switch (action.type) {
//         case "BUY_PRODUCT":
//             return{
//                 ...state,
//                 index:action.payload
//             }
//         default:
//             return state;
//     }
// }
// 
// const Store=({children})=>{
//     const [state,dispatch]=useReducer(Reducer,initialState)
//     return (
//         <Context.Provider value={[state,dispatch]}>
//             {children}
//         </Context.Provider>
//     )
// }
// 
// export const Context=createContext(initialState)
// 
// export default Store
