import Link from 'next/link'
import { FunctionComponent, ReactNode } from 'react'
import { css } from '@emotion/react'

interface NavbarEntryProps {
  children: ReactNode,
  href: string,
}

const NavbarEntry: FunctionComponent<NavbarEntryProps> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a
        href={href}
        css={css`
          display: block;
          font-size: 1.25rem;
          padding-block: 0.5rem;
        `}
        onClick={() => console.log('click')}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavbarEntry
