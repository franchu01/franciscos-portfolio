import React from 'react'
import { HeaderStyled, LogoContainerStyled, OptionStyled, OptionsContainerStyled } from './HeaderStyles'

const Header = (props) => {
  return <>
    <HeaderStyled>
        <LogoContainerStyled>
            FRAN
        </LogoContainerStyled>
        <OptionsContainerStyled>
            <OptionStyled>About me</OptionStyled>
            <OptionStyled>Habilities</OptionStyled>
            <OptionStyled>Proyects</OptionStyled>
            <OptionStyled>Contact</OptionStyled>
        </OptionsContainerStyled>
    </HeaderStyled>
  </>
}

export default Header