import { useContext, useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import RoastContext from '../../contexts/roast'
import { useRouter } from 'next/router'

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  div {
    width: 100%;
  }
  button {
    margin-top: 18px;
  }
`

const Details = () => {
  const { push } = useRouter()
  const { roastData, updateRoastData } = useContext(RoastContext)
  const [data, setData] = useState({
    roaster: roastData.roaster || '',
    beanOrigin: roastData.beanOrigin || '',
    beanWeight: roastData.beanWeight || '',
    roomTemperature: roastData.roomTemperature || '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleNext = () => {
    updateRoastData(data)
    push('/roast/countdown')
  }

  return (
    <DetailsContainer>
      <h2>
        First ... <br />A few details
      </h2>
      <div>
        <label htmlFor="roaster">Roaster Model</label>
        <input
          id="roaster"
          name="roaster"
          onChange={handleChange}
          type="text"
          value={data.roaster}
        />
        <label htmlFor="beanOrigin">Bean Origin</label>
        <input
          id="beanOrigin"
          name="beanOrigin"
          onChange={handleChange}
          type="text"
          value={data.beanOrigin}
        />
        <label htmlFor="beanWeight">Bean Weight</label>
        <input
          id="beanWeight"
          name="beanWeight"
          onChange={handleChange}
          type="text"
          value={data.beanWeight}
        />
        <label htmlFor="roomTemperature">Room Temperature</label>
        <input
          id="roomTemperature"
          name="roomTemperature"
          onChange={handleChange}
          type="text"
          value={data.roomTemperature}
        />
      </div>
      <Button onClick={handleNext}>Start Roast</Button>
    </DetailsContainer>
  )
}

export default Details
