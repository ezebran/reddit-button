import { Layout } from '@/components/layout/Layout'
import { MainContainer, ButtonsContainer, InputName, FormContainer } from '@/styles/HomeStyles'
import DownCounter from '@/components/home/DownCounter'
import StopButton from '@/components/home/buttons/StopButton'
import ResetButton from '@/components/home/buttons/ResetButton'
import SendButton from '@/components/home/buttons/SendButton'
import { ChangeEvent, FormEvent, useState, useEffect } from 'react'

export default function Home() {
  
  const [isRun, setIsRun] = useState(true) //Check if the count down run
  const [count, setCount] = useState(60)
  const [name, setName] = useState('')

  useEffect(() => {
    if(typeof window !== undefined && window.localStorage.getItem("userInfo") !== undefined){ // If we are on the client side and the userInfo is been created
      const saved: any = window.localStorage.getItem("userInfo")
      const parceSaved: any = JSON.parse(saved)

      //If something is saved on the localstorage we set the states
      setIsRun(parceSaved.isRun)
      setCount(parceSaved.count)
      setName(parceSaved.name)
    }else{
      window.localStorage.setItem("userInfo", JSON.stringify({isRun, name, count}));
    }
  }, []);

  const saveRecord = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof window !== undefined) {
      window.localStorage.setItem("userInfo", JSON.stringify({isRun, count, name }));
    }
  }

  // Saved the name
  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setName(value)

  return (
    <Layout>
    <MainContainer>
        <h1>coso</h1>
      <DownCounter isRun={isRun} count={count} setCount={setCount} name={name} />

      <FormContainer onSubmit={saveRecord} name={name}>
        <InputName isRun={isRun} placeholder="Ingresa tu nombre.." name="nombre" onChange={handleChange} />
        <SendButton isRun={isRun} saveRecord={saveRecord} >Enviar</SendButton>
      </FormContainer>

      <ButtonsContainer isRun={isRun} name={name}>
        <StopButton setIsRun={setIsRun} isRun={isRun}>Parar</StopButton>
        <ResetButton setCount={setCount} setIsRun={setIsRun} count={count} >Resetear</ResetButton>
      </ButtonsContainer>

    </MainContainer>


    </Layout>
  )
}