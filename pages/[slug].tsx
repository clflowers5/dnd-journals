import type { NextPage } from 'next'
import Head from 'next/head'
import { AppShell, Header } from '@mantine/core';
import { css } from '@emotion/react'

import Navbar from '../components/Navbar'

import { getJournalEntries } from '../api/contentful'

import styles from '../styles/Home.module.css'
import JournalEntriesContext from '../context/JournalEntriesContext'
import { useRouter } from 'next/router'
import { JournalEntry } from '../models/JournalEntry'
import JournalEntryText from '../components/JournalEntryText'

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
          <div
            css={css`
              background-color: #f8f5de;
              background-image: linear-gradient(to right, rgba(255, 210, 0, 0.4), rgba(200, 160, 0, 0.1) 11%, rgba(0, 0, 0, 0) 35%, rgba(200, 160, 0, 0.1) 65%);
              box-shadow: inset 0 0 75px rgba(255, 210, 0, 0.3), inset 0 0 20px rgba(255, 210, 0, 0.4), inset 0 0 30px rgba(220, 120, 0, 0.8);
              height: 100%;
              padding: 5em;
            `}
          >
            {entryToDisplay && entryToDisplay.body.map((entry, index) =>
              <JournalEntryText rawText={entry} key={`${entry}-${index}`}/>
            )}
          </div>
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
