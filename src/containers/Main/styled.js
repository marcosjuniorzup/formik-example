import styled from 'styled-components'

export const Main = styled.main`
  margin: auto;
`
export const Row = styled.div`
  display: flex;
`
export const Column = styled.div`
  width: ${({ dist }) => dist || '100% '};
`
export const Footer = styled.footer`
  text-align: right;
  width: 100%;
`
export default Image
