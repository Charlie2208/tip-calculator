import { useState, useEffect } from 'react'
import Button from './components/Button'
import { calcularPropina, formatearDinero, calcularTotal } from './helpers'
import dollar from '../src/images/dollar.svg'
import person from '../src/images/person.svg'




const App = () => {



  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0);
  const [numeroPersonas, setNumeroPersonas] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [random, setRandom] = useState(0)
  const [totalPropina, setTotalpropina] = useState(0)
  const [totalPropinaPorPersona, setTotalPropinaPorPersona] = useState(0)



  useEffect(() => {
    const resultadoPropina = calcularPropina(bill,tip)
    setTipAmount(resultadoPropina)

    const resultadoTotalPropina = calcularTotal(bill, tip)
    setTotalpropina(resultadoTotalPropina)
  },[bill,tip])

 useEffect(()=> {

 },[])

  useEffect(()=>{
    setRandom(tipAmount/Number(numeroPersonas))

    setTotalPropinaPorPersona(totalPropina/Number(numeroPersonas))

  },[numeroPersonas])

  const handleChange = (e) => {
    setBill(+e.target.value);
  }

  const handleClick = (e) => {


    setTip(+e.target.value);
  }

  const handleChangeCustomTip = (e) =>{
    setTip(+e.target.value)
  }

  const handleChangePersonas = (e) => {
    setNumeroPersonas(+e.target.value);
  }

const handleClickReset = ()=>{
  window.location.reload(true);
}

  return (
    <div className="flex h-screen justify-center items-center bg-cyan-100 ">
      <div className="container p-6 rounded-xl bg-white  shadow">
        <div className="grid md:grid-cols-2 mx-2">
            <div className="mx-5 py-4">
              <h1 className="text-[#7F9C9E]">Bill</h1>
              <div className="relative mt-2">
                <label className="absolute top-0 left-0 flex items-center" htmlFor="inputDolar"><img className="py-1" src={dollar} alt="Dollar Logo" /></label>
                <input 
                  
                  className={`${bill == 0 ? 'text-[#7F9C9E] bg-[#F4F9FA] font-bold outline-[#25BFAB] w-full text-right' : 'bg-[#F4F9FA]  text-[#00484C] font-bold outline-[#25BFAB] w-full text-right'}`}
                  onChange={handleChange} 
                  id="inputDolar"
                  value={bill}
                  />
              </div>
              
               
              <div className="py-10">
                <h2 className="text-[#7F9C9E]">Select tip %</h2>
                <div className="grid grid-cols-3">
                  <Button 
                  text="5%"
                  value="0.5"
                  fn={handleClick}
                  />
                  <Button 
                  text="10%"
                  value="0.10"
                  fn={handleClick}
                  />
                  <Button 
                  text="15%"
                  value="0.15"
                  fn={handleClick}
                  />
                  <Button 
                  text="20%"
                  value="0.20"
                  fn={handleClick}
                  />
                  <Button 
                  text="25%"
                  value="0.25"
                  fn={handleClick}
                  />
                  <input 
                  className="bg-[#00484C] text-center text-white font-bold py-2 rounded-md mx-1.5 my-3 outline-[#25BFAB]
                  hover:bg-[#F4F9FA] hover:text-[#00484C]"
                  onChange={handleChangeCustomTip}
                  placeholder="Custom"
                  
                  
                  />
                </div>

                <div className="mt-6">
                  <h2 className="text-[#7F9C9E]">Number of people</h2>
                  {numeroPersonas == 0 ? <span className="text-red-500">Can't be zero</span>  : null}
                  <div className="relative mt-2">
                    <label htmlFor="numeroPersonas" className="absolute top-0 left-0 flex items-center"><img className="py-1" src={person} alt="Person Logo" /></label>
                    <input 
                    onChange={handleChangePersonas}
                    className={`${bill == 0 ? 'text-[#7F9C9E] bg-[#F4F9FA] font-bold outline-[#25BFAB] w-full text-right' : 'bg-[#F4F9FA]  text-[#00484C] font-bold outline-[#25BFAB] w-full text-right'}`}
                    id="numeroPersonas"
                    placeholder="0"
                    />

                  </div>
                  
                </div>
              </div>
                
            </div>
            <div className=" grid-cols-3 bg-[#00484C] rounded-xl px-5">
              
              <div className="grid grid-cols-2 p-3">
                
                <div className="py-5">
                  <p className="  text-white font-semibold font-monospace">Tip Amount</p>
                  <span className="text-stone-400">/ person</span>
                </div>
                <h2 className="font-bold text-[#25BFAB] text-4xl py-5">{random  ? formatearDinero(random)  : "0.00"}</h2>
                <div className="py-5">
                  <p className="  text-white font-semibold">Total</p>
                  <span className="text-stone-400">/ person</span>
                </div >
                <h2 className="font-bold text-[#25BFAB] text-4xl py-5">{totalPropinaPorPersona? formatearDinero(totalPropinaPorPersona) : "0.00" }</h2>
                
              </div>
                <button onClick={handleClickReset} type="button"
                        className={`${bill == 0 ? ' bg-[#5E797D] font-bold text-[#00484C] rounded-lg py-2 w-full mb-2 md:mb-0 md:p-3 md:mt-24' : 'bg-[#25BFAB] font-bold text-[#00484C] rounded-lg py-2 w-full p-3 md:mt-24 hover:bg-[#F4F9FA]'} `}
                >
                  RESET
                </button>
            </div>
        </div>
        
       
      </div>
      
    </div>
  )
}

export default App
