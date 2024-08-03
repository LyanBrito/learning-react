import React, { Component } from "react";
import { HeaderContainer, HeaderNav, HeaderTitle, HeaderWrapper, MenuImg, NavAnchors, NavWrapper } from "./style";
import { GlobalStyle } from "../Assets/GlobalStyle";
import Logo from "../Assets/imgs/imgs/header-img.svg";
import Menu from "../Assets/imgs/imgs/hamburger-icon.svg"

export default class PageHeaderv extends Component {
  render() {
    return (
      <HeaderContainer>
        <GlobalStyle />
        <HeaderWrapper>
          <img src={Logo} alt="headerlogo" />
          <HeaderTitle>Lyan Brito</HeaderTitle>
        </HeaderWrapper>
        <MenuImg src={Menu} alt="menu hamburger" />
        <div id="menu">
          <HeaderNav>
            <NavWrapper>
            <NavAnchors href="http://" target="_blank" rel="noopener noreferrer">
              About Me
            </NavAnchors>
            <NavAnchors href="http://" target="_blank" rel="noopener noreferrer">
              Skills
            </NavAnchors>
            <NavAnchors href="http://" target="_blank" rel="noopener noreferrer">
              Projects
            </NavAnchors>
            <NavAnchors href="http://" target="_blank" rel="noopener noreferrer">
              Contact Me
            </NavAnchors>
            </NavWrapper>
          </HeaderNav>
        </div>
      </HeaderContainer>
    );
  }
}

