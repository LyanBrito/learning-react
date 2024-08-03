import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 32px;
  gap: 100px;
  width: 100%;
  height: 104px;
  background-color: var(--white-100);
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
`;

export const HeaderTitle = styled.p`

  font-family: "Sora", sans-serif;
  color: var(--black-200);
  line-height: 24px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
`;
export const NavMenu = styled.div`
  @media (max-width: 375px) {
    display: none;
  }
`;
export const MenuImg = styled.img`
  display: none;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 248px;
  justify-content: center;
  align-items: center;
  `;
export const NavWrapper = styled.nav`
  display: flex;
  gap: 25px;

`

export const NavAnchors = styled.a`
  font-family: "Sora", sans-serif;
  color: var(--black-200);
  line-height: 24px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
`;
