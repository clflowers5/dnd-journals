import type { NextPage } from 'next'
import { getJournalEntries } from '../api/contentful'
import { JournalEntry } from '../models/JournalEntry'
import JournalEntriesContainer from '../components/JournalEntriesContainer'
import { useRouter } from 'next/router'
import AppContext from '../context/AppContext'

interface HomeProps {
  journalEntries: JournalEntry[]
}

const Home: NextPage<HomeProps> = ({ journalEntries }) => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <AppContext.Provider value={{ activeSlug: slug as string | undefined }}>
      <JournalEntriesContainer
        journalEntries={journalEntries}
        selectedEntrySlug={slug as string | undefined} // kind of gross
      />
    </AppContext.Provider>
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
