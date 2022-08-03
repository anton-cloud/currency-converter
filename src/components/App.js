import { useState, useEffect } from "react";
import Footer from "./Footer"
import Header from './Header'
import Main from './Main'
import axios from "axios"


const App = () => {

  const [rates, setRates] = useState([])

  useEffect(() => {
    axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json").then(response => {
      response.data.filter((item) => item.cc === "USD" || item.cc === "EUR")
      const result = [...response.data.filter((item) => item.cc === "USD" || item.cc === "EUR"), { txt: 'Гривня', rate: 1, cc: 'UAN' }]
      setRates(result)
    })
  }, [])

  return (
    <>
      <Header rates={rates} />
      <Main rates={rates} />
      <Footer />
    </>
  );
}

export default App;