import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 90px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.brandGrey.darkest};
  
  background-color: ${({ theme }) => theme.palette.brandGrey.darker};
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.extraLarge};
  font-weight: 900;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.palette.brandGreen.main};
`

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  color: ${({ theme }) => theme.palette.brandGrey.lighter};
`
