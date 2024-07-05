import { useState } from "react"

const url_api = 'https://demo.ws.itarget.com.br/event.php'


export default function Api(){
const[loading, setLoading] = useState(false)
const fetchAll = async() => {
  try{
    setLoading(true)
    const data = await fetch(url_api)
    const result = await data.json()
    return {
      props: {result}
    }
  }
  catch(error){
    console.log(error)
  } finally {
    setLoading(false)
  }
}
}
