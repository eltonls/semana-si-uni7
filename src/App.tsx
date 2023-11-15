import styled from "styled-components"
import Header from "./components/header/Header"
import Bg from "./assets/img/bg3.jpg"
import Bg2 from "./assets/img/bg2.jpg"
import logoSI from "./assets/logos/SI.png"
import Timer from "./components/Timer"
import CardAbout from "./components/Cards/CardAbout"
import CardSpeaker from "./components/Cards/CardSpeaker"
import CardCronology from "./components/Cards/CardCronology"
import CardFAQ from "./components/Cards/CardFAQ"
import Footer from "./components/footer/Footer"
import { events21NOV, events22NOV, events23NOV, events24NOV } from "./EventsInfo"

const Section = styled.section`
  position: relative;
  width: 100vw;
  z-index: -2;
  padding: 3rem;
`

const SectionSpeakers = styled(Section)`
  background-color: #202024;
  color: #fff;
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

const SectionFAQ = styled(Section)` 
  color: #fff;
  background-image: linear-gradient(130deg, 
    rgba(32, 32, 36, .7) 0%, 
    rgba(32,32,36,0.7) 100%),
  url(${Bg2});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const SectionCronology = styled(Section)`
  border-radius: 1rem;
  background-image: linear-gradient(130deg, 
    rgba(0,143,87,0.7) 0%, 
    rgba(18,19,15,0.7) 100%),
  url(${Bg});
  background-size: cover;
  background-position: center;
  margin-top: -1rem;
`

const SectionTitle = styled.h2` 
  font-size: 2.2rem;
  padding: 0 1.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #fff;
  
  @media(min-width: 768px) {
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
  padding: 1rem 0rem;
  background-color: #E1E1E6;
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.7rem;
  border: none;
  border-radius: 1rem;
  margin: 0 auto;
  margin-top: 1.5rem;

  a {
    text-decoration: none;
    width: 100%;
    padding: 1rem 3rem;
    @media(min-width: 1200px) {
      padding: 2rem 5rem;
    }
  }

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
  justify-content: center;
  margin-top: 8rem;
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
            <a href="https://www.sympla.com.br/evento/semana-de-sistemas-de-informacao/2214911" target="_blank">Inscrever-se</a>
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
      </AboutSection>

      <SectionSpeakers id="Convidados">
        <SectionTitle>
          &lt;Convidados Confirmados/&gt;
        </SectionTitle>
        <CardsWrapper>
          <CardSpeaker
            name="Carlos Germano"
            cargo="Analista de negócios sênior - Tribunal de Justiça do Estado do Ceará"
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            dataDeParticipacao="Seg - Mesa Redonda"
          />
          <CardSpeaker
            name="Victor Carvalho"
            cargo="Analista DevOps - SERPRO"
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            dataDeParticipacao="Seg - Mesa Redonda"
          />
          <CardSpeaker
            name="Victor Deodato"
            cargo="Desenvolvedor IOS Sênior"
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            dataDeParticipacao="Seg - Mesa Redonda"
          />
          <CardSpeaker
            name="Raylan Cordeiro"
            cargo="Desenvolvedor, Professor e Freelancer - Digibee"
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            dataDeParticipacao="Seg - Mesa Redonda"
          />
          <CardSpeaker
            name="Welton Diones"
            cargo="Analista de Inteligência de Negócio - Boticário"
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            dataDeParticipacao="Seg - Mesa Redonda"
          />
          <CardSpeaker
            name="Ramon Martins"
            cargo="Engenheiro de Cibersegurança"
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            dataDeParticipacao="Seg - Mesa Redonda"
          />
          <CardSpeaker
            name="Nayara Valevskii"
            cargo="Gerente de Gente e Gestão - Konstroi"
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            dataDeParticipacao="Ter - Palestra"
          />
          <CardSpeaker
            name="Charlyane Araújo"
            cargo="Analista de Dados - Voke"
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            dataDeParticipacao="Ter - Oficina"
          />
          <CardSpeaker
            name="Mateus Cesar"
            cargo="Engenheiro de Software - Instituto Atlântico"
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            dataDeParticipacao="Ter - Oficina"
          />
          <CardSpeaker
            name="Claudemir Queiroz"
            cargo="Mestre em Computação Aplicada(Uece), Professor em Cibersegurança, CEO da CQRisk"
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            dataDeParticipacao="Qua - Palestra"
          />
          <CardSpeaker
            name="Kallebe Dantas"
            cargo="Desenvolvedor Fullstack"
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            dataDeParticipacao="Qua - Oficina"
          />
          <CardSpeaker
            name="Rafael Nunes"
            cargo="Desenvolvedor Fullstack"
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            dataDeParticipacao="Qua - Oficina"
          />
          <CardSpeaker
            name="Alex Souza"
            cargo="Mestre em Inteligência Artificial, Especialista em Análise de Dados - Compass.uol"
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            dataDeParticipacao="Qui - Palestra"
          />
          <CardSpeaker
            name="Jailson Batista"
            cargo="Executive Director - Lanlink Informática Ltda."
            imgUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            dataDeParticipacao="Qui - Palestra"
          />
        </CardsWrapper>
      </SectionSpeakers>

      <SectionCronology id="Programação">
        <SectionTitle>&lt;Programação/&gt;</SectionTitle>
        <CardCronology events={events21NOV} date="21 NOV" />
        <CardCronology events={events22NOV} date="22 NOV" />
        <CardCronology events={events23NOV} date="23 NOV" />
        <CardCronology events={events24NOV} date="24 NOV" />
      </SectionCronology>

      <SectionFAQ>
        <CardFAQ
          question="Qual o local do Evento?"
          answer="Av. Almirante Maximiniano da Fonseca, 1395 - Luciano Cavalcante, Fortaleza - CE, 60811-020" />
        <CardFAQ
          question="Haverá certificado para os participantes?"
          answer="Sim, será emitido certificado para os participantes"
        />
        <CardFAQ
          question="Posso participar sem ser aluno da faculdade?"
          answer="Sim, o evento estará aberto a todo o público interessado"
        />
        <CardFAQ
          question="Para quem é o evento?"
          answer="Para qualquer um que tenha interesse na área de tecnologia, apenas com o adendo de que algumas oficinas requerem conhecimento prévio"
        />
        <CardFAQ
          question="Existem requisitos para participar?"
          answer="Algumas das oficinas requerem algum tipo de conhecimento prévio como: familiaridade com uso de interfaces de linha de comando, conhecimento básico em programação, etc."
        />
      </SectionFAQ>
      <Footer />
    </>
  )
}

export default App
