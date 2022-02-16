import { contentfulEntryToJournalEntry } from '../../models/JournalEntry'
import { ContentfulJournalEntry } from '../../models/ContentfulJournalEntry'

const BASE_URL = `https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}`

async function getRawJournalEntries() {
  const response = await fetch(
    `${BASE_URL}/entries`,
    {
      headers: new Headers({
        'Authorization': `Bearer ${process.env.CONTENTFUL_API_KEY}`
      })
    }
  )

  return await response.json()
}

async function getJouralEntries() {
  const journalEntries = await getRawJournalEntries()
  return journalEntries.items.map((entry: ContentfulJournalEntry) => contentfulEntryToJournalEntry(entry))
}

export {
  getJouralEntries,
}
