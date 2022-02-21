import { FunctionComponent } from 'react'
import { css } from '@emotion/react'
import JournalEntriesContext from '../../context/JournalEntriesContext'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import { AppShell, Header } from '@mantine/core'
import Navbar from '../Navbar'
import { JournalEntry } from '../../models/JournalEntry'
import JournalEntryText from '../JournalEntryText'

interface JournalEntriesContainerProps {
  journalEntries: JournalEntry[]
  selectedEntrySlug?: string
}

const JournalEntriesContainer: FunctionComponent<JournalEntriesContainerProps> = ({
  journalEntries,
  selectedEntrySlug
}) => {
  const selectedJournalEntry = selectedEntrySlug
    ? journalEntries.find(entry => entry.slug === selectedEntrySlug)
    : null
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
            {selectedJournalEntry && (
              <JournalEntryText rawText={selectedJournalEntry.body.join('')}/>
            )}
          </div>
        </AppShell>
      </div>
    </JournalEntriesContext.Provider>
  )
}

export default JournalEntriesContainer