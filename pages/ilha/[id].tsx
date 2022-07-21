import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../../styles/Ilha.module.css'
import styled from 'styled-components'
import { getRegistrosIlhas, Ilha, Registro } from '../../services'
import { useRouter } from 'next/router'
import RegistroCard from '../../components/RegistroCard'
import Headers from '../../components/Header'
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
  const [registros, setRegistros] = useState<Registro[]>([])
  const router = useRouter()
  const { id } = router.query as { id: string }

  useEffect(() => {
    getRegistrosIlhas(id)
      .then((data) =>setRegistros(data))
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
        <h1 className={styles.title}>Agro TechFields</h1>
        <ListContainer className="registros">
          {registros.length > 0 ? (
            registros.map((registro) => (
              <RegistroCard key={registro.id} registro={registro} />
            ))
          ) : (
            <ReactLoading type="spin" color="lightblue" height={100} width={100} />
          )}
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
