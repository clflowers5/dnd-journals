import type { NextPage } from 'next'

import JournalEntriesContainer from '../components/JournalEntriesContainer'

import { getJournalEntries } from '../api/contentful'

interface HomeProps {
  journalEntries: any
}

const Home: NextPage<HomeProps> = ({ journalEntries }) => <JournalEntriesContainer journalEntries={journalEntries}/>

export async function getStaticProps() {
  const journalEntries = await getJournalEntries()
  return {
    props: {
      journalEntries
    }
  }
}

export default Home
