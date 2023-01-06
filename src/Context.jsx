import {createContext,useState} from 'react'
export const myContext=createContext();
const Context = ({children}) => {
    const [selectprod,setSelectprod]=useState();
    const[itemno,setItemno]=useState(0)
    const [addtocart,setAddtocart]=useState([]);
    const[count,setCount]=useState(0)
    const[total,setTotal]=useState(0)
  return (
    <myContext.Provider value={{selectprod,setSelectprod,addtocart,setAddtocart,count,setCount,itemno,setItemno,total,setTotal}}>{children}</myContext.Provider>
  )
}

export default Context;
