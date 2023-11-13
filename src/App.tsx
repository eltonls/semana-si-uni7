import styled from "styled-components"
import Header from "./components/header/Header"
import Bg from "./assets/img/bg3.jpg"
import logoSI from "./assets/logos/SI.png"

const HeroSection = styled.section`
  height: 100vh;
  width: 100vw;
  padding-top: 1.5rem;
  background-image: linear-gradient(130deg, 
    rgba(0,143,87,0.7) 0%, 
    rgba(18,19,15,0.7) 100%),
  url(${Bg});
  background-size: cover;
  background-position: center;

  @media (min-width: 576px) {
    padding-top: 3.5rem;
  }
`

const Card = styled.div`
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(18, 19, 15, 0.85);
  border-radius: 12px;

  width: 75%;
  min-height: 40%;
  margin: 0 auto;
  padding: 2.5rem;
  color: #FCFCFC;
`

const Logo = styled.img`
  width: 20rem;
  margin: 0 auto;
  display: block;
`

const Title = styled.h1`
  font-size: 2.4rem;
  text-align: center;
`

const Text = styled.p`
  font-size: 2.2rem;
`

const Button = styled.button`
  display: block;
  padding: 1rem 5rem;
  background-color: #E1E1E6;
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.7rem;
  border: none;
  border-radius: 1rem;
  margin: 0 auto;
  margin-top: 1.5rem;
`

function App() {
  return (
    <>
      <Header />
      <HeroSection>
        <Card>
          <Title className="heading-primary">
            Semana de <span className="text-blue">Sistema</span> de <span className="text-yellow">Informação</span>
          </Title>
          <Logo src={logoSI} />
          <Text>
            Segurança da informação,
            mobile, back-end,
            inteligência artificial e muito mais!
          </Text>
          <Button>
            Inscrever-se
          </Button>
        </Card>
      </HeroSection>
    </>
  )
}

export default App
