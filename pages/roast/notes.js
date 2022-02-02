import { useContext, useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import useCreateRoast from '../../hooks/useCreateRoast'
import RoastContext from '../../contexts/roast'
import { useRouter } from 'next/router'

const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  div {
    width: 100%;
  }
  textarea {
    margin-bottom: 36px;
  }
`

const Notes = () => {
  const { push } = useRouter()
  const { roastData, clearRoastData } = useContext(RoastContext)
  const [notes, setNotes] = useState('')
  const { mutate } = useCreateRoast()

  const handleSubmit = (skip = false) => {
    const payload = skip ? roastData : { ...roastData, notes }
    mutate(payload, {
      onSuccess: () => {
        clearRoastData()
        push('/')
      },
    })
  }

  return (
    <NotesContainer>
      <h2>Roasting notes</h2>
      <div>
        <textarea
          name="roastNotes"
          placeholder="Remember what happened ..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <Button onClick={() => handleSubmit()}>Save Notes</Button>
      <Button onClick={() => handleSubmit(true)} secondary>
        Skip
      </Button>
    </NotesContainer>
  )
}

export default Notes
