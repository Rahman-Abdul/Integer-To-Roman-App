import React from "react";
import { useEffect, useState } from "react"
import { convertToRoman } from "roman";
import styles from '@/pages/index.module.css'

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
   <div className={styles.container}>
    <h3> CONVERT INTEGER TO ROMAN NUMERAL</h3>
    <input type="number" placeholder='enter number' onChange={intChange} value={result}/>
    <h3>Roman Numeral:</h3>
      <h1>{roman}</h1>
   </div>
  )
}

