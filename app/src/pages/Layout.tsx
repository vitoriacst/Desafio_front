import Header from "@/components/Header"
import Api from "./api/Api"

export default function Layout(){
  const url_api = 'https://demo.ws.itarget.com.br/event.php'
  const data = Api(url_api)
  console.log(data,'data')
  return (
      <Header/>
  )
}
