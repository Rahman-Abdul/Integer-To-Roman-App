import { useEffect, useState } from "react"

export default function Home() {
  const [result, setResult] = useState('');

  const intChange = (e: any) =>{
    setResult(e.target.value)
  }
  
  return (
   <div className="container">
    <h1> CONVERT INTEGER TO ROMAN NUMERALS</h1>
    <input type="nxumber" placeholder='enter number' onChange={intChange} value={result}/>
   </div>
  )
}
