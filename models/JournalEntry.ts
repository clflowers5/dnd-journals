import { ContentfulJournalEntry, getField, ParagraphContent } from './ContentfulJournalEntry'

export interface JournalEntry {
  body: string[]
  character: string
  logDate: string
  title: string
}

function contentfulEntryToJournalEntry(data: ContentfulJournalEntry): JournalEntry {
  const parsedBody = getField<ParagraphContent>('body', data)?.content.map(entry => {
    return entry.content.map(innerEntry => innerEntry.value)
  }).flat()

  return {
    body: parsedBody ?? [],
    character: getField<string>('character', data) ?? '',
    logDate: getField<string>('logDate', data) ?? '',
    title: getField<string>('title', data) ?? '',
  }
}

export {
  contentfulEntryToJournalEntry,
}