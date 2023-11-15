import styled from "styled-components"
import { PiLinkedinLogoBold, PiInstagramLogoBold } from "react-icons/pi"

type SpeakerCardProps = {
  imgUrl: string
  name: string
  cargo: string
  dataDeParticipacao: string
}

const Card = styled.div`   
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin: 2rem auto;
  border-radius: 1rem;
  box-shadow: #008F57 0px 5px 15px;
  width: 20rem;
  height: 35rem;
  padding: .5rem;

  .data {
    padding: 1rem .5rem;
    background-color: #008F57;
    border-radius: 1rem;
    font-size: 1.8rem;
  }

  @media(min-width: 1200px) {
    margin: 5rem;
    margin-top: 0rem;
  }
`
/*
const ImageContainer = styled.div`
  width: 14rem;
  height: 14rem;
  
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -15%;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 50%;
` */

const Name = styled.h3` 
  margin: 2.5rem 0;
  font-size: 3rem;
  text-align: center;
`

const Position = styled.p`
  font-size: 2rem; 
  text-align: center;
`

const SocialButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 3.2rem;

  a {
    color: #fff;
  }
`

const CardSpeaker = (props: SpeakerCardProps) => {
  return (
    <Card>
      <Name>{props.name}</Name>
      <Position>{props.cargo}</Position>
      <SocialButtonsWrapper>
        <a href="#">
          <PiLinkedinLogoBold />
        </a>
        <a href="#">
          <PiInstagramLogoBold />
        </a>
      </SocialButtonsWrapper>
      <p className="data">SEG - MESA REDONDA</p>
    </Card>
  )
}

export default CardSpeaker
