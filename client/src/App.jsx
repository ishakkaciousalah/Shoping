import './App.css'
import Header from './components/Header'
import Landing from './components/Landing'
import Categories from './components/Categories'
import Produits from './components/Produits'
import Footer from './components/Footer'
import { useState } from 'react'


function App() {
  const [jaimeCount1 ,setJaime1 ] = useState(0)
  const [jaimeCount2 ,setJaime2 ] = useState(0)
  const [jaimeCount3 ,setJaime3 ] = useState(0)
  const [panierCount,setPanierCount] = useState(0)
  function ajouterAuPanier(){
    setPanierCount((lastNumber)=> lastNumber+1)
  }
  function Aimer1(){
    setJaime1((nombre)=>nombre+1)
  }
  function Aimer2(){
    setJaime2((nombre)=>nombre+1)
  }
  function Aimer3(){
    setJaime3((nombre)=>nombre+1)
  }

  return (
    <>
      <Header panierCount={panierCount} />
      
      <Landing />

      <Categories />

      <Produits 
           weAdd={ajouterAuPanier} 
           like={Aimer1}
           like2={Aimer2}
           like3={Aimer3}
           jaimeCount1={jaimeCount1}
           jaimeCount2={jaimeCount2}
           jaimeCount3={jaimeCount3}
       />

      <Footer />
    </>
  )
}

export default App
