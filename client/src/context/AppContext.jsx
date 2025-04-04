import { createContext } from "react"
 const AppContext = createContext()
export const  AppContextPrtovider =(props) =>{
  const currency = 'INR'
  const value = {
    currency
  }
  return (
    <AppContext.Provider value={value}>
{props.children}
    </AppContext.Provider>
  )
}

