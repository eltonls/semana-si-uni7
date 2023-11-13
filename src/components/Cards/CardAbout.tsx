import styled from "styled-components"
import { PiGearBold, PiChalkboardTeacherBold, PiUsersThreeBold, PiTrophyBold } from "react-icons/pi"

type CardAboutProps = {
  num: string
  title: string
  icon: string
  desc: string
}

const Card = styled.div` 
  display: block;
  position: relative;
  margin: 0rem auto;
  border-radius: 1rem;
  box-shadow: #008F57 0px 5px 15px;
  width: 20rem;
  padding: 1rem;
  margin-top: 3.5rem;

  h4 {
    position: absolute;
    left: 50%;
    top: -15%;
    transform: translateX(-50%);
    font-size: 8rem;
    color: #008F57;
    text-shadow: #008F57 0px 5px 15px;
  }

  h3 {
    margin-top: 2.5rem;
    font-size: 3rem;
    text-align: center;
  }

  p{
    font-size: 2.5rem; 
    text-align: center;
  }

  .icon {
    display: block;
    font-size: 7rem;
    color: #008F57;
    margin: 1.5rem auto;
  }
`

const CardAbout = (props: CardAboutProps) => {
  return (
    <Card>
      <h4>{props.num}</h4>
      <h3>{props.title}</h3>
      {
        props.icon === "gear" ? <PiGearBold className="icon" /> : ""
      }
      {
        props.icon === "screen" ? <PiChalkboardTeacherBold className="icon" /> : ""
      }
      {
        props.icon === "people" ? <PiUsersThreeBold className="icon" /> : ""
      }
      {
        props.icon === "trophy" ? <PiTrophyBold className="icon" /> : ""
      }
      <p>{props.desc}</p>
    </Card>
  )
}

export default CardAbout;
