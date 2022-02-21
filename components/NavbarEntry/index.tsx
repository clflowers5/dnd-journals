import Link from 'next/link'
import { FunctionComponent, ReactNode } from 'react'
import { css } from '@emotion/react'

interface NavbarEntryProps {
  active?: boolean
  children: ReactNode,
  href: string,
}

const NavbarEntry: FunctionComponent<NavbarEntryProps> = ({ active, href, children }) => {
  return (
    <Link href={href} passHref>
      <a
        href={href}
        css={css`
          display: block;
          font-size: 1.25rem;
          line-height: 1.5rem;
          padding-block: 0.5rem;
          padding-inline-start: 1rem;
          margin-inline-start: 0.75rem;
          border-left: solid 1px ${active ? '#0f172a' : '#dee2e6'};

          :hover {
            border-left-color: #0f172a;
            border-start-end-radius: 10px;
            border-end-end-radius: 10px;
          }
        `}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavbarEntry
