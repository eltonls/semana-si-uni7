import styled from "styled-components"
import Header from "./components/header/Header"
import Bg from "./assets/img/bg3.jpg"
import logoSI from "./assets/logos/SI.png"
import Timer from "./components/Timer"
import CardAbout from "./components/Cards/CardAbout"
import CardSpeaker from "./components/Cards/CardSpeaker"

const Section = styled.section`
  position: relative;
  width: 100vw;
  z-index: -2;
  padding-top: 1.5rem;
`

const HeroSection = styled(Section)`
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

const AboutSection = styled(Section)`
  background-color: #202024;  
  color: #fff;
  padding: 5rem;

  p {
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 1rem;

    @media(min-width: 1200px) {
      font-size: 2.5rem;
    }
  }
`

const SectionTitle = styled.h2` 
  font-size: 2.2rem;
  padding: 0 1.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #fff;

  @media(min-width: 1200px) {
    font-size: 4rem;
  }
`

const Card = styled.div`
  position: relative;
  z-index: -1;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(18, 19, 15, 0.85);
  border-radius: 12px;

  width: 75%;
  min-height: 40%;
  margin: 0 auto;
  padding: 2.5rem;
  color: #FCFCFC;
  
  @media(min-width: 1200px) {
    padding: 5rem;
  }
`

const Logo = styled.img`
  width: 20rem;
  margin: 0 auto;
  display: block;

  @media(min-width: 1200px) {
    width: 40rem;
    position: absolute;
    bottom: -20%;
    right: -10%;
  }
`

const Title = styled.h1`
  font-size: 2.4rem;
  text-align: center;

  @media(min-width: 1200px) {
    font-size: 5rem;
    text-align: left;
  }
`

const Text = styled.p`
  font-size: 2.2rem;
  text-align: center;
  
  @media(min-width: 1200px) {
    font-size: 4rem;
    width: 75%;
  }
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

  @media(min-width: 1200px) {
    padding: 1.5rem 7rem;

    position: absolute;
    left: 5%;
    bottom: -5%;
  }
`

const DateText = styled.p`
  display: block;
  color: #fff;
  margin: 5rem 0rem;
  text-align: center;

  @media(min-width: 576px) {
    font-size: 3.5rem;
    margin-bottom: 12rem;
  }
`

const DateSpan = styled.span`
  background-color: rgba(0,143,87, .7);
  padding: 1rem 5rem;
  border-radius: 1rem;
  margin: 1rem;
`

const TextCode = styled.p`
  display: none; 

  @media(min-width: 1200px) {
    display: block;
    font-size: 5.5rem;
    margin: 6.5rem 0;
    color: #008F57;
  }
`

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
          <TextCode>System.out.println("Inovação")</TextCode>
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
        <div>
          <DateText>
            <DateSpan>20NOV</DateSpan>
            —
            <DateSpan>24NOV</DateSpan>
          </DateText>
          <Timer />
        </div>
      </HeroSection>
      <AboutSection>
        <SectionTitle>
          &lt;Semana de <span className="text-blue">Sistemas </span>
          de <span className="text-yellow">Informação</span>&gt;
        </SectionTitle>
        <p>
          Evento gratuito e aberto ao público voltado
          para alunos e interessados por tecnologia!
        </p>

        <CardsWrapper>
          <CardAbout num="4" title="Opções de Oficina" icon="gear" desc="Figma, React Native, Git e Java" />
          <CardAbout num="+4" title="Opçõe de Palestras" icon="screen" desc="Figma, React Native, Git e Java" />
          <CardAbout num="5" title="Dias de Network" icon="people" desc="Figma, React Native, Git e Java" />
          <CardAbout num="+4" title="Opções de Prêmios" icon="trophy" desc="Ganhe no Kahoot e na competição" />
        </CardsWrapper>

        <CardsWrapper>
          <CardSpeaker
            name="Carlos Germano"
            cargo="Analista de negócios sênior - Tribunal de Justiça do Estado do Ceará"
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
          />
        </CardsWrapper>
      </AboutSection>
    </>
  )
}

export default App
