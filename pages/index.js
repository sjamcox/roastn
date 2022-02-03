import { useSession } from 'next-auth/react'
import styled from 'styled-components'
import Button from 'components/Button'
import Link from 'next/link'
import axios from 'axios'
import { useQuery, useMutation } from 'react-query'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 50vw;
  h2 {
    text-align: center;
    margin: 0 0 36px 0;
  }
`

const LoggedIn = ({ session }) => {
  const handleSubmit = async () => {
    const { data } = await axios.post('/api/roasts', {
      email: session.user.email,
      roaster: 'albino',
      beanOrigin: 'test',
      beanWeight: 'test',
      ambientTemp: 'test',
      startTime: Date.now(),
      firstCrack: 'test',
      secondCrack: 'test',
      totalTime: 'test',
      notes: 'test',
    })
  }

  return (
    <Container>
      <h2>Turn up the heat</h2>
      <Link href="/roast/details">
        <Button>New Roast</Button>
      </Link>
      <Link href="/roasts">
        <Button secondary>Roast History</Button>
      </Link>
    </Container>
  )
}

const LoggedOut = () => {
  return (
    <Container>
      <h2>Log in to continue</h2>
    </Container>
  )
}

export default function Home() {
  const { data: session } = useSession()
  return <div>{session ? <LoggedIn session={session} /> : <LoggedOut />}</div>
}
