import { useState, useEffect } from "react";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import styles from './Main.module.css'

const Main = ({ rates }) => {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAN");

  useEffect(() => {
    if (!!rates) {
      handleAmount1Change(1);
    }
  }, [rates])

  const handleAmount1Change = (amount1) => {
    const value1 = (rates.filter((item) => item.cc === currency2))
    const value2 = (rates.filter((item) => item.cc === currency1))
    setAmount2(amount1 * value2[0]?.rate / value1[0]?.rate)
    setAmount1(amount1)
  }

  const handleCurrency1Change = (currency1) => {

    console.log(`currency1: ${currency1}`);
    const value1 = (rates.filter((item) => item.cc === currency2))
    const value2 = (rates.filter((item) => item.cc === currency1))

    setAmount2(amount1 * value2[0]?.rate / value1[0]?.rate)
    setCurrency1(currency1)
  }

  const handleAmount2Change = (amount2) => {
    const value1 = (rates.filter((item) => item.cc === currency2))
    const value2 = (rates.filter((item) => item.cc === currency1))
    setAmount1((amount2 * value1[0]?.rate / value2[0]?.rate).toFixed(4))
    setAmount2(amount2)
  }

  const handleCurrency2Change = (currency2) => {
    const value1 = (rates.filter((item) => item.cc === currency2))
    const value2 = (rates.filter((item) => item.cc === currency1))
    setAmount1((amount2 * value1[0]?.rate / value2[0]?.rate).toFixed(4))
    setCurrency2(currency2)
  }

  return (
    <main>
      <CurrencyInput
        amount={amount1}
        carrencies={rates.map((item) => item.cc)}
        currency={currency1}
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change} />
      <CurrencyInput
        amount={amount2}
        carrencies={rates.map((item) => item.cc)}
        currency={currency2}
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change} />
    </main>
  );
}

export default Main;