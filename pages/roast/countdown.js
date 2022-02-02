import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const CountdownContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 60px);
  width: 100%;
  h2 {
    margin: 0;
  }
  p {
    color: #999999;
    font-size: 200px;
    font-weight: 700;
    margin: -60px;
  }
`

const Countdown = () => {
  const { push } = useRouter()
  const [number, setNumber] = useState(3)

  useEffect(() => {
    const decrement = setTimeout(() => {
      if (number - 1 > 0) {
        setNumber(number - 1)
      } else {
        push('/roast/timer')
      }
    }, 1000)

    return () => clearTimeout(decrement)
  }, [number, push])

  return (
    <CountdownContainer>
      <h2>Get ready</h2>
      <p>{number}</p>
    </CountdownContainer>
  )
}

export default Countdown
