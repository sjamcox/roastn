import { useRouter } from 'next/router'
import styled from 'styled-components'
import useRoast from '../../hooks/useRoast'

const RoastDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  div {
    display: flex;
    flex-direction: row;
  }
  div > p {
    font-size: 20px;
    margin-right: 16px;
  }
`

const RoastDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: roast } = useRoast(id)
  const date = '11/11/11'
  const time = '11:30 AM'

  return (
    <RoastDetailsContainer>
      {roast && (
        <>
          <h2>{roast.beanOrigin}</h2>
          <div>
            <p>{date}</p>
            <p>{time}</p>
          </div>
          <p>Roaster: {roast.roaster}</p>
          <p>Weight: {roast.beanWeight}</p>
          <p>Ambient Temp: {roast.ambientTemp}</p>
          <p>First Crack: {roast.firstCrack}</p>
          <p>Second Crack: {roast.secondCrack}</p>
          <p>Total Time: {roast.timeElapsed}</p>
          <p>Roasting Notes: {roast.notes}</p>
        </>
      )}
    </RoastDetailsContainer>
  )
}

export default RoastDetails
