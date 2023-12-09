import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>I have never seen anything like Java</h1> 
        <Link href={"/java/java1"}>Go To details</Link>
        
    </div>
  )
}

export default page