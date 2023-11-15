import styled from "styled-components"
import LogoUNI7Footer from "../../assets/logos/uni7-logo-rodape-ver.svg"
import GrupoSerLogo from "../../assets/logos/logo-ser.png"
import LanlinkLogo from "../../assets/logos/logo-lanlink.svg"

const FooterWrapper = styled.footer` 
  background-color: #202024;  
  color: #fff;
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 15rem;
  }

  h2 {
    font-size: 3rem;
    margin: 1.5rem 0;
  }

  .patrocinador {
    width: 100%;
    text-align: center;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <a href="https://www.uni7.edu.br/" target="_blank">
          <img src={LogoUNI7Footer} />
        </a>
        <a href="https://www.sereducacional.com/" target="_blank">
          <img src={GrupoSerLogo} />
        </a>
      </div>
      <div className="patrocinador">
        <h2>&lt;Patrocinador&gt;</h2>
        <a href="https://www.lanlink.com.br/" target="_blank">
          <img src={LanlinkLogo} />
        </a>
      </div>
    </FooterWrapper>
  )
}

export default Footer
