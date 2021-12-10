import Head from 'next/head'
import {GlobalStyles} from '@/styles/GlobalStyles'
import { LayoutContainer } from '@/styles/LayoutStyles'
import Navbar from './Navbar'
import { useEffect, useState } from 'react'

export const Layout: React.FC = ({ children }) => {


  return(
    <>
      <Head>
        <title>Reddit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />
      
      <LayoutContainer>
        {children}
      </LayoutContainer>
      
      <GlobalStyles />
    </>
  )
}