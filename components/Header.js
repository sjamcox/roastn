import styled from 'styled-components'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

const StyledHeader = styled.header`
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 20px;
  position: sticky;
  top: 0px;
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
`

const Header = () => {
  const { data: session } = useSession()
  return (
    <StyledHeader>
      <div>
        <Link href="/" passHref>
          <h1>roastn</h1>
        </Link>
      </div>
      <div>
        {session ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
      </div>
    </StyledHeader>
  )
}

export default Header
