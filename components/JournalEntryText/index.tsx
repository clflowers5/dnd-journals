import { FunctionComponent } from 'react'
import { css, Global } from '@emotion/react'

interface JournalEntryTextProps {
  rawText: string
}

const JournalEntryText: FunctionComponent<JournalEntryTextProps> = ({ rawText }) => {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: 'james_fajardoregular';
            src: url('/fajardo-webfont.woff2') format('woff2'),
            url('/fajardo-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;

          }
          color: hotpink !important;
        `}
      />
      <div
        css={css`
          font-family: 'james_fajardoregular';
          font-size: 4rem;
          line-height: 1.25;
        `}
        dangerouslySetInnerHTML={{ __html: rawText }}
      />
    </>
  )
}

export default JournalEntryText
