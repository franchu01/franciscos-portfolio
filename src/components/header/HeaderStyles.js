import styled from "styled-components";

export const HeaderStyled = styled.div`

    width: 100vw;
    height: 50px;

    display: flex;

`

export const LogoContainerStyled = styled.div`

    height: 100%;
    width: 40%;
    font-size: 32px;
    font-weight: bold;
    background-color: ${(props) => props.theme.backgroundBlack };
    color: ${(props) => props.theme.bone };

    display: flex;
    justify-content: center;
    align-items: center;

`
export const OptionsContainerStyled = styled.div`

    height: 100%;
    width: 60%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    background-color: ${(props) => props.theme.greyWhite };

`

export const OptionStyled = styled.button`

    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.darkGrey };

    font-weight: bold;
    cursor: pointer;
    font-size: 20px;

`
