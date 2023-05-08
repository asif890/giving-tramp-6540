import { createContext,useState } from "react";
export const authcontext=createContext()

function Authcontextprovider({children}){
    const [isauth,setisauth]=useState(false)


    const login =()=>{
        setisauth(true)
    }
const logout =()=>{
    setisauth(false)
}
    return (
        <authcontext.Provider value={{isauth,login,logout}}>
            {children}
        </authcontext.Provider>
    )
}
export default Authcontextprovider;