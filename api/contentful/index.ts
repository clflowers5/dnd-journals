const debug = require('debug')('api-contentful')
import { contentfulEntryToJournalEntry, JournalEntry } from '../../models/JournalEntry'
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

async function getJournalEntries(): Promise<JournalEntry[]> {
  const journalEntries = await getRawJournalEntries()
  debug('raw journal entries:', journalEntries)

  const entries = journalEntries.items
    .map((entry: ContentfulJournalEntry) => contentfulEntryToJournalEntry(entry))
    .sort((a: JournalEntry, b: JournalEntry) => {
      // todo: cf - this may need additional work with actual dates
      if (!a.logDate || a.logDate > b.logDate) {
        return -1
      } else if (a.logDate < b.logDate) {
        return 1
      } else {
        return 0
      }
    })

  debug('transformed journal entries:', entries)
  return entries
}

export {
  getJournalEntries,
}
