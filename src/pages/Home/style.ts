import styled from 'styled-components'

export const Home = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  padding: 40px;

  @media (max-width: 600px) {
    padding: 25px 15px;
  }
`
