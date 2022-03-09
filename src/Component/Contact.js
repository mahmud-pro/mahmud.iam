import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact() {
  const {name} = useParams();
  return (
    <>
        <h1>I am Contact Page {name}</h1>
    </>
  )
}
