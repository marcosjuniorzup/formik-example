import styled from 'styled-components'

export const StyledCard = styled.section`
  width: ${({ size }) => size && size};
  background: ${({ color }) => color || '#fff'};
  display: flex;
  flex-wrap: wrap;
  border-radius: 2px;
  padding: 10px;
  @media (max-width: 800px) {
    padding: 10px;
  }
  flex-basis: 100%;
  box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.1);
`
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  align-items: center;
`
export default StyledCard
