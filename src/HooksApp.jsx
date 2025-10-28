import { FetchApp } from "./components/FetchApp"
import { CounterApp } from "./components/CounterApp"
import { FormApp } from "./components/FormApp"


export const HooksApp = () => {
  return (
    <>
      <h1>Aplicacion de Hooks</h1>
      <hr />
      <FetchApp />
      <hr />
      <CounterApp />
      <hr />
      <FormApp />
    </>
  )
}
