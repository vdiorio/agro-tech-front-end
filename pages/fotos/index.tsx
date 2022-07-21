import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../../styles/Ilha.module.css'
import styled from 'styled-components'
import { getFotos, Ilha, Foto } from '../../services'
import FotoCard from '../../components/FotoCard'
import Headers from '../../components/Header'
import { log } from 'console'

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  gap: 30px;
`

const Home: NextPage = () => {
  const [fotos, setFotos] = useState<Foto[]>([])

  useEffect(() => {
    console.log('TAMALCOPRA?')
    getFotos()
      .then((data) =>setFotos(data))
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Agro TechFields</title>
        <meta name="description" content="Minha aplicação da aceleração JAVA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headers />
      <main className={styles.main}>
        <ListContainer className="fotos">
          {fotos.length > 0 && fotos.map((foto) => (
            <FotoCard key={foto.id} foto={foto} />
          ))}
        </ListContainer>
      </main>

      <footer className={styles.footer}>
        <h3>
          Feito por Vitor Martins Diorio
        </h3>
      </footer>
    </div>
  )
}

export default Home
