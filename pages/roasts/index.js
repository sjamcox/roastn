import styled from 'styled-components'
import RoastSnippet from 'components/RoastSnippet'
import useRoasts from 'hooks/useRoasts'

const RoastHistoryContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
`

const RoastHistory = () => {
  const { data: roasts } = useRoasts()

  return (
    <RoastHistoryContainer>
      <h2>Roasts</h2>
      {roasts &&
        roasts.map((roast) => {
          return (
            <RoastSnippet
              beanOrigin={roast.beanOrigin}
              date={roast.startTime}
              key={roast._id}
              id={roast._id}
            />
          )
        })}
    </RoastHistoryContainer>
  )
}

export default RoastHistory
