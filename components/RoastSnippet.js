import styled from 'styled-components'
import Link from 'next/link'

const RoastSnippetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  width: 100%;
  div {
    display: flex;
    flex-direction: row;
  }
  div > p {
    margin-right: 16px;
  }
`

const RoastSnippet = ({ beanOrigin, date, id }) => {
  const day = new Date(Number(date)).toLocaleDateString()

  return (
    <RoastSnippetContainer>
      <div>
        <p>{day}</p>
        <p>{beanOrigin}</p>
      </div>
      <Link href={`/roasts/${id}`}>
        <p>Details ...</p>
      </Link>
    </RoastSnippetContainer>
  )
}

export default RoastSnippet
