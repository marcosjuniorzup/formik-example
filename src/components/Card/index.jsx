import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Title } from '../Title'
import { StyledCard, Container } from './styled'

export const Card = ({ children, size, color, ...props }) => (
  <StyledCard size={size} color={color} {...props}>
    {children}
  </StyledCard>
)
export const CardTitle = ({ children, title, ...props }) => (
  <Container {...props}>
    {title && <Title className="mg-right-10">{title}</Title>}
    {children}
  </Container>
)

export const CardBody = ({ children }) => <Container>{children}</Container>

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

CardTitle.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

CardBody.propTypes = {
  children: PropTypes.node
}

export default Card
