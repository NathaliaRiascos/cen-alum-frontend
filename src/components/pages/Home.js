import React from 'react'
import { ReactComponent as ImagePrincipal } from 'assets/img/principal.svg'
import Head from 'components/atomic/atoms/Heading'
import { container_home, imagen_principal } from 'components/templates/Container.module.css'

const Home = () => (
  <div className={container_home}>
    <Head type='h1'>¡Bienvenido!</Head>
    <ImagePrincipal className={imagen_principal}/>
    <p>Te ayudaremos a agilizar los procesos cotidianos en tu empresa</p>
  </div>
)

export default Home