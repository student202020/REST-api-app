
import React from "react"
import Loading from "./Loading"



export default function Korpa() {
  const [odabrani, setOdabrani] = React.useState([])
  const [loading, setLoading] = React.useState(true)



async function fetchData(){
  setLoading(true)
  const response = await fetch("http://localhost:44431/api/Proizvodi/Odabrani")
  const data = await response.json()
  setOdabrani(data.listProizvodi)
  setLoading(false)
}
React.useEffect(() => {fetchData()}, [])


if(loading){return <Loading />}

function ukloni(id){
  setOdabrani(prevValue => {
    return prevValue.filter(item => item.id !== id)
  })
}

  return (
    
    
    <div>
    <h1>Mobiteli koje ste odabrali</h1>    
   
    <p>{odabrani.map(item => {
      return(<div>
        <img src={item.slika} />
        <h4>{item.naziv}</h4>
        <p>{item.cijena}</p>
        <p>{item.kolicina}</p>
        <button onClick={() => ukloni(item.id)}>Ukloni</button>
       </div>)
    })}</p>
    
    </div>
  );
}


