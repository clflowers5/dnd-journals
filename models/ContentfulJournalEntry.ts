export interface ParagraphContent {
  content: [
    {
      content: [
        {
          value: string
        }
      ]
    }
  ]
}

export interface ContentfulJournalEntry {
  sys: {
    id: string
  },
  fields: {
    character: {
      "en-US": string
    },
    title: {
      "en-US": string
    },
    logDate?: {
      "en-US": string
    }
    body?: {
      "en-US": ParagraphContent
    }
  }
}

function getField<T>(fieldName: string, source: ContentfulJournalEntry): T | null {
  // @ts-ignore
  const fieldSource = source.fields[fieldName] // not important.
  return fieldSource ? fieldSource['en-US'] : null
}

export {
  getField,
}
