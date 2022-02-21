import { FunctionComponent } from 'react'
import JournalEntriesContext from '../../context/JournalEntriesContext'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import { AppShell, Header } from '@mantine/core'
import Navbar from '../Navbar'
import { JournalEntry } from '../../models/JournalEntry'
import { useRouter } from 'next/router'

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
          {selectedJournalEntry && (
            <div dangerouslySetInnerHTML={{ __html: selectedJournalEntry.body.join('') }}/>
          )}
        </AppShell>
      </div>
    </JournalEntriesContext.Provider>
  )
}

export default JournalEntriesContainer