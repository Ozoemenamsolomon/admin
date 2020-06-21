import React from "react"
import { Button as RebassButton } from "rebass"
import styled from "@emotion/styled"
import Typography from "../typography"

const StyledButton = styled(RebassButton)`
  ${Typography.Base}
`

const Button = ({ children, variant, type, onClick, ...props }) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type || "button"}
      variant={`buttons.${variant}`}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
