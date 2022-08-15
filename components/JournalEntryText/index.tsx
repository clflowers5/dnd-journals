import { FunctionComponent } from 'react'
import { css } from '@emotion/react'

interface JournalEntryTextProps {
  rawText: string | string[]
}

const JournalEntryText: FunctionComponent<JournalEntryTextProps> = ({ rawText }) => {
  return (
    <>
      <div
        css={css`
          font-family: 'james_fajardoregular';
          font-size: 4rem;
          font-weight: normal;
          font-style: normal;
          line-height: 1.25;
        `}
      >
        {Array.isArray(rawText) ? (
          rawText.map((entry, index) => <div key={`${entry}-${index}`}>{entry}</div>)
        ) : (
          <div dangerouslySetInnerHTML={{ __html: rawText }}/>
        )}
      </div>
    </>
  )
}

export default JournalEntryText
