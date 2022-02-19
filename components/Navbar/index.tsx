import { Navbar as BaseNavbar, Divider, ScrollArea } from '@mantine/core'
import { FunctionComponent, useContext } from 'react'


import NavbarEntry from '../NavbarEntry'

import JournalEntriesContext from '../../context/JournalEntriesContext'
import { JournalEntry } from '../../models/JournalEntry'

const MIN_WIDTH = 300

interface NavbarProps {
  journalEntries: JournalEntry[]
}

const Navbar: FunctionComponent<NavbarProps> = ({ journalEntries }) => {
  return (
    /* 95vh used in conjunction with 5vh on the Header component */
    <BaseNavbar width={{ base: MIN_WIDTH }} padding="xs" sx={{ height: '95vh' }}>
      <BaseNavbar.Section mt="sm" mb="sm">
        Journals boi
      </BaseNavbar.Section>
      <Divider/>
      <BaseNavbar.Section
        grow
        component={ScrollArea}
        ml={-10}
        mr={-10}
        sx={{ paddingLeft: 10, paddingRight: 10 }}
      >
        {journalEntries.map((entry) =>
          <NavbarEntry key={entry.slug} href={`/${entry.slug}`}>{entry.title}</NavbarEntry>
        )}
      </BaseNavbar.Section>
    </BaseNavbar>
  )
}

function NavbarContainer() {
  const journalEntries = useContext(JournalEntriesContext)
  return <Navbar journalEntries={journalEntries}/>
}

export default NavbarContainer
