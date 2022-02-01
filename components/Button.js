import styled from 'styled-components'

const Button = styled.button`
  background-color: ${(props) => (props.secondary ? 'white' : 'black')};
  border: none;
  border-radius: 24px;
  color: ${(props) => (props.secondary ? 'black' : 'white')};
  width: 192px;
  margin-bottom: 16px;
  padding: 16px 24px;
`

export default Button
