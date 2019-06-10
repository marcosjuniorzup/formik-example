import styled, { css } from 'styled-components'

export const FieldGroupStyled = styled.div`
  margin: 10px 10px;
`
export const Distribution = styled.div`
  width: ${({ dist }) => dist};
`
Distribution.defaultProps = {
  dist: '25%'
}
