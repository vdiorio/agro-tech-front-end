import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import IlhaCard from '../components/IlhaCard'
import { getIlhas, Ilha } from '../services'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Headers from '../components/Header'
import ReactLoading from 'react-loading';

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
  const [ilhas, setIlhas] = useState<Ilha[]>([])

  useEffect(() => {
    getIlhas()
      .then((data) =>setIlhas(data))
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
        <h1>Ilhas</h1>
        <ListContainer className="ilhas">
          {ilhas.length > 0 ? ilhas.map((ilha) => (
            <IlhaCard key={ilha.id} ilha={ilha} newCard={false} />
          )) : (
            <ReactLoading type="spin" color="lightblue" height={100} width={100} />
          )}
          <IlhaCard ilha={{} as Ilha} newCard />
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
