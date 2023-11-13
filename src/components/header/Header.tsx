import styled from "styled-components"
import logo from "../../assets/logos/logo-uni7-hor-vazado.png"
import Nav from "./Nav"
import { useEffect, useState } from "react"

const LogoLink = styled.a`
  Width: 8rem;
  display: block;
`

const Logo = styled.img`
  width: 100%;
`

const Wrapper = styled.header`
  max-width: 100%;
  position: sticky;
  height: 4rem;
  padding: 3rem;
  background: #202024;
  color: #FCFCFC;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all fade-out 1.5s;
`

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState<string>("")
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleButtonMenu = () => {
    setIsMenuOpen(true)
  }

  const handleButtonClose = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY ? "Down" : "Up"

      if (direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
        handleButtonClose()
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    }

    window.addEventListener("scroll", updateScrollDirection)

    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [scrollDirection])


  return (
    <Wrapper className={scrollDirection === "Down" ? "invisible" : "show"}>
      <LogoLink>
        <Logo src={logo} />
      </LogoLink>
      <Nav handleButtonMenu={handleButtonMenu} handleButtonClose={handleButtonClose} isMenuOpen={isMenuOpen} />
    </Wrapper>
  )
}

export default Header
