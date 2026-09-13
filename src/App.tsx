import { Suspense } from "react"
import Banner from "./Components/Banner"
import NavBar from "./Components/NavBar"
import Technologies from "./Components/Technologies"
import type { Itechnology } from "./types/technologyType"
import Footer from "./Components/Footer"

const technologiesFetch = async (): Promise<Itechnology[]> =>{
  const res = await fetch("/public/data.json")
  const data = await res.json()
  return data
}

function App() {

  const technologiesPromise = technologiesFetch()

  return (
    <>

    <NavBar />
    <Banner></Banner>
    <Suspense fallback={<h2>Loading......</h2>}>
      <Technologies technologiesPromise={technologiesPromise}></Technologies>
    </Suspense>
    <Footer></Footer>
    
      
    </>
  )
}

export default App
