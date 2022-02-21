import { createContext } from 'react'

interface AppContextShape {
  activeSlug?: string
}

const AppContext = createContext<AppContextShape>({})

export default AppContext
