import type { NextPage } from 'next'
import Head from 'next/head'
import { AppShell, Header } from '@mantine/core';

import Navbar from '../components/Navbar'

import { getJouralEntries } from '../api/contentful'

import styles from '../styles/Home.module.css'
import JournalEntriesContext from '../context/JournalEntriesContext'

interface HomeProps {
  journalEntries: any
}

const Home: NextPage<HomeProps> = ({ journalEntries }) => {
  return (
    <JournalEntriesContext.Provider value={journalEntries}>
      <div className={styles.container}>
        <Head>
          <title>DnD Journals</title>
          <meta name="description" content="Dungeons & Dragons Journals"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <AppShell
          padding="md"
          navbar={<Navbar/>}
          /* 5vh used in conjunction with 95 for navbar component */
          header={<Header height='5vh' padding="xs">DnD Journals</Header>}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >
          <div>foo bar baz</div>
        </AppShell>
      </div>
    </JournalEntriesContext.Provider>
  )
}

export async function getStaticProps() {
  const journalEntries = await getJouralEntries()
  return {
    props: {
      journalEntries
    }
  }
}

export default Home
