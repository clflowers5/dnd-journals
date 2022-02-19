import type { NextPage } from 'next'
import Head from 'next/head'
import { AppShell, Header } from '@mantine/core';

import Navbar from '../components/Navbar'

import { getJournalEntries } from '../api/contentful'

import styles from '../styles/Home.module.css'
import JournalEntriesContext from '../context/JournalEntriesContext'
import { useRouter } from 'next/router'
import { JournalEntry } from '../models/JournalEntry'

interface HomeProps {
  journalEntries: JournalEntry[]
}

const Home: NextPage<HomeProps> = ({ journalEntries }) => {
  const router = useRouter()
  const { slug } = router.query
  const entryToDisplay = journalEntries.find(entry => entry.slug === slug)

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
          {entryToDisplay && (
            <div dangerouslySetInnerHTML={{ __html: entryToDisplay.body.join('') }}/>
          )}
        </AppShell>
      </div>
    </JournalEntriesContext.Provider>
  )
}

export async function getStaticProps() {
  const journalEntries = await getJournalEntries()
  return {
    props: {
      journalEntries
    }
  }
}

export async function getStaticPaths() {
  const journalEntries = await getJournalEntries()
  const paths = journalEntries.map((entry) => ({
    params: { slug: entry.slug }
  }))
  return { paths, fallback: false }
}


export default Home
