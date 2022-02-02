import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import RoastContext from '../../contexts/roast'

const RoastTimerContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-weight: 400;
    font-size: 10rem;
    margin-top: 75px;
  }
  p {
    height: 18px;
    margin-bottom: 16px;
    padding: 16px 0;
  }
  span {
    font-weight: 700;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
  }
`

const Timer = () => {
  const { push } = useRouter()
  const { updateRoastData, clearRoastData } = useContext(RoastContext)
  const [progress, setProgress] = useState({
    startTime: Date.now(),
    firstCrack: null,
    secondCrack: null,
  })
  const [isRunning, setIsRunning] = useState(true)
  const [timeElapsed, setTimeElapsed] = useState(0)

  const handleEnd = () => {
    setIsRunning(false)
    updateRoastData({
      ...progress,
      totalTime: formatTime(timeElapsed),
    })
    push('/roast/notes')
  }

  const handleCancel = () => {
    setIsRunning(false)
    clearRoastData()
    push('/')
  }

  const formatTime = (mil) => {
    let seconds = Math.floor(mil / 1000) % 60
    let minutes = Math.floor(mil / 60000)
    if (seconds < 10) {
      seconds = `0${seconds}`
    }
    return `${minutes}:${seconds}`
  }

  const updateProgress = (e) => {
    const { name } = e.target
    setProgress({
      ...progress,
      [name]: formatTime(Date.now() - progress.startTime),
    })
  }

  useEffect(() => {
    const update = setTimeout(() => {
      if (isRunning) {
        setTimeElapsed(Date.now() - progress.startTime)
      }
    }, 30)
    return () => clearTimeout(update)
  }, [isRunning, timeElapsed])

  return (
    <RoastTimerContainer>
      <h2>{formatTime(timeElapsed)}</h2>
      {!progress.firstCrack && (
        <>
          <Button name="firstCrack" onClick={updateProgress}>
            First Crack
          </Button>
          <Button secondary>&nbsp;</Button>
        </>
      )}
      {progress.firstCrack && !progress.secondCrack && (
        <>
          <p>First Crack: {progress.firstCrack}</p>
          <Button name="secondCrack" onClick={updateProgress}>
            Second Crack
          </Button>
        </>
      )}
      {progress.secondCrack && (
        <>
          <p>First Crack: {progress.firstCrack}</p>
          <p>Second Crack: {progress.secondCrack}</p>
        </>
      )}
      <div>
        <Button onClick={handleEnd}>End and Save</Button>
        <Button secondary onClick={handleCancel}>
          Cancel Roast
        </Button>
      </div>
    </RoastTimerContainer>
  )
}

export default Timer
