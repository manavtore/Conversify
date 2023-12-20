'use client'
import { use, useState } from 'react';
import { useSocket } from '../context/SocktProvider';
import classes from './page.module.css';
export default function page(){

  const {sendMessage} = useSocket();

  const [message,setMessage] = useState("");

  return <div>
    <div>
      <h1>All message appear here</h1>
    </div>
    <div>
      <input onChange={e=>setMessage(e.target.value)} className={classes["chat-input"]}placeholder="Message..."></input>
      <button onClick={e=>sendMessage(message)} className={classes["button"]}>Send</button>
    </div>
  </div>
}