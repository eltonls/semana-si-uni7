import styled from "styled-components"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import logo from "../../assets/logos/logo-uni7-hor-vazado.png"
import { useState } from "react"

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

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleButtonMenu = () => {
    setIsMenuOpen(true)
  }

  const handleButtonClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <Container>
      <MenuBtn onClick={handleButtonMenu}>
        <FiMenu />
      </MenuBtn>

      <Menu className={isMenuOpen ? "show" : "invisible"}>
        <Header >
          <Logo src={logo} />
          <MenuBtn onClick={handleButtonClose}>
            <AiOutlineClose />
          </MenuBtn>
        </Header>
        <MenuList>
          <li>Programação</li>
          <li>Palestrantes</li>
        </MenuList>
      </Menu>
    </Container>
  )
}

export default Nav
