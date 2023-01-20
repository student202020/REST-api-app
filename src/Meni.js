
import React, {useState, useEffect} from "react"
import Loading from "./Loading"
import axios from "axios"


export default function Meni() {

  const [podaci, setPodaci] = React.useState([])
  const [loading, setLoading] = React.useState(true)



async function fetchData(){
  setLoading(true)
  const response = await fetch("http://localhost:44431/api/Proizvodi/Svi")
  const data = await response.json()
  setPodaci(data.listProizvodi)
  setLoading(false)
}
React.useEffect(() => {fetchData()}, [])

function dodaj(id){
const data = {ID: id}
axios.post("http://localhost:44431/api/Proizvodi/Dodaj", data)
.then((result) => {
  if(result.data.statusCode === '200'){alert("Stavka dodana")}
  else { alert("Stavka nije dodana!")}
})
 .catch((error) => {console.log(error)})  

}
if(loading){return <Loading />}
  return (
    <div>
    <h1>Mobiteli u ponudi</h1>
    {podaci.length}
    <p>{podaci.map(item => {
      return(<div>
        <img src={item.slika} />
        <h4>{item.naziv}</h4>
        <p>{item.cijena}</p>
        <p>{item.kolicina}</p>
        <button onClick={() => dodaj(item.id)}>Dodaj u korpu</button>
       </div>)
    })}</p>
    

    </div>
  );
}


