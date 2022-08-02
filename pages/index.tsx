import React from "react";
import { useEffect, useState } from "react"
import { convertToRoman } from "roman";

export default function Home() {
  const [result, setResult] = useState <any>("");
  const [roman, setRoman] = useState <any>("");

  const intChange = (e: any) =>{
    setResult(e.target.value)
  }
  useEffect(() => {
  setRoman(convertToRoman(result))
  },)

  return (
   <div className="container">
    <h1> CONVERT INTEGER TO ROMAN NUMERALS</h1>
    <input type="number" placeholder='enter number' onChange={intChange} value={result}/>
    <h3>Roman Numeral:</h3>
      <h1>{roman}</h1>
   </div>
  )
}

