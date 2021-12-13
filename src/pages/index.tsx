import { Layout } from '@/components/layout/Layout'
import { MainContainer, ButtonsContainer, InputName, FormContainer, FinalMessage, RankingLink } from '@/styles/HomeStyles'
import DownCounter from '@/components/home/DownCounter'
import StopButton from '@/components/home/buttons/StopButton'
import ResetButton from '@/components/home/buttons/ResetButton'
import SendButton from '@/components/home/buttons/SendButton'
import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { useColors } from '@/hooks/useColors'
import Link from 'next/link'

export default function Home() {

  const [isRun, setIsRun] = useState(true) //Check if the count down run
  const [count, setCount] = useState(60)
  const [name, setName] = useState('')
  const [isSend, setIsSend] = useState(false)

  useEffect(() => {
    // If we are on the client side and the userInfo is been created
    if (typeof window !== undefined && window.localStorage.getItem("userInfo") !== null && window.localStorage.getItem("userInfo") !== undefined) {
      const saved: any = window.localStorage.getItem("userInfo")
      const parceSaved: any = JSON.parse(saved)
      //If something is saved on the localstorage we set the states
      setIsRun(parceSaved.isRun)
      setCount(parceSaved.count)
      setName(parceSaved.name)
      setIsSend(parceSaved.isSend)
    }
  }, []);

  const saveRecord = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof window !== undefined) {
      window.localStorage.setItem("userInfo", JSON.stringify({ isRun, count, name, isSend: true }));
    }
    setIsSend(true)
  }

  // Saved the name
  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setName(value)

  // return the color
  const userColor = useColors(count);
  return (
    <Layout>
      <MainContainer>

        <DownCounter isRun={isRun} count={count} setCount={setCount} isSend={isSend} />
        <ButtonsContainer isRun={isRun} isSend={isSend}>
          <StopButton setIsRun={setIsRun} isRun={isRun}>Parar</StopButton>
          <ResetButton setCount={setCount} setIsRun={setIsRun} count={count} isRun={isRun} >Resetear</ResetButton>
        </ButtonsContainer>
        <FormContainer onSubmit={saveRecord} isSend={isSend}>
          <InputName isRun={isRun} placeholder="Ingresa tu nombre.." name="nombre" onChange={handleChange} />
          
          
            <SendButton isRun={isRun} saveRecord={saveRecord} >Enviar</SendButton>
            
          
        </FormContainer>

        <FinalMessage isSend={isSend} userColor={userColor}>Hola <span>{name}</span>, mira que colores usaron otros usuarios.</FinalMessage>
        <Link href="/Records">
          <RankingLink isSend={isSend}>Ver ranking</RankingLink>
        </Link>

      </MainContainer>
    </Layout>
  )
}