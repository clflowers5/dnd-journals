import { createContext } from 'react'
import { JournalEntry } from '../../models/JournalEntry'

const JournalEntriesContext = createContext<JournalEntry[]>([])

export default JournalEntriesContext
