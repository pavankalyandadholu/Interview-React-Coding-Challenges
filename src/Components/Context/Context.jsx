import React from 'react'

export const dummyContext= React.createContext();
const Context = () => {
    const {data}= React.useContext(dummyContext);
    console.log(data)
  return (
<div>{data}</div>
  )
}

export default Context