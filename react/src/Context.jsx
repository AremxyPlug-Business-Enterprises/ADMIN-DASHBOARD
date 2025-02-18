import React, {useContext, useState} from 'react';
import {createContext} from "react";
 
const GlobalContext = createContext();
// The UseGlobalContext was created to help simplify work,
//Hence there is no need to import  useContext in every component.

export const UseGlobalContext = ()=> useContext(GlobalContext);
export const Context = ({children}) => {
    const [example, setExample] = useState("Hello World");
    // Once the useState value has been created, the value shoul be passed through the hold object,
    //which is then passed recognized as a global value through all components
//For more understanding, check app.jsx
    
    const hold ={
example, 
setExample
    }
  return (
    
   <GlobalContext.Provider value={hold}>
      {children}
   </GlobalContext.Provider>
  
  )
}
