import styled from "styled-components"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import logo from "../../assets/logos/logo-uni7-hor-vazado.png"
import { MouseEventHandler } from "react"

type NavProps = {
  handleButtonMenu: MouseEventHandler,
  handleButtonClose: MouseEventHandler,
  isMenuOpen: boolean
}

const Container = styled.nav`
`

const MenuBtn = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;

  @media only screen and (min-width: 576px) {
    display: none;
  }
`

const Menu = styled.div`
  transition: transform .5s ease-in-out;

  @media (max-width: 576px) {
    background: #202024;
    position: fixed;  
    z-index: 50;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
  }

  @media (min-width: 576px) {
    display: block;
    width: auto;
    height: auto;
    transform: translateY(0); /* normalize */
  }
`

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.8rem;

  @media(max-width: 576px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  li {
    text-shadow: #008F57 0px 5px 15px;
    margin-bottom: 2rem;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.8rem;

    li {
      margin: 1.2rem;
      text-shadow: none;
      margin-bottom: none;
    }
  }
`

const Header = styled.header`
  height: 4rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  @media (min-width: 576px) {
    display: none;
  }
`

const Logo = styled.img`
  width: 8rem;
`

const Nav = (props: NavProps) => {
  return (
    <Container>
      <MenuBtn onClick={props.handleButtonMenu}>
        <FiMenu />
      </MenuBtn>

      <Menu className={props.isMenuOpen ? "show" : "invisible"}>
        <Header >
          <Logo src={logo} />
          <MenuBtn onClick={props.handleButtonClose}>
            <AiOutlineClose />
          </MenuBtn>
        </Header>
        <MenuList>
          <li> <a href="#Programação" onClick={props.handleButtonClose}>Programação</a></li>
          <li> <a href="#Convidados" onClick={props.handleButtonClose}>Convidados</a></li>
        </MenuList>
      </Menu>
    </Container>
  )
}

export default Nav
