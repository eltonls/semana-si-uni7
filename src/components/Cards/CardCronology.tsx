import styled from "styled-components"
import Event from "../../types/Event"

type CardCronologyProps = {
  events: Event[]
  date: string
}

const Cronology = styled.div` 
  position: relative;
  overflow: hidden;
  z-index: -1;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(18, 19, 15, 0.85);
  border-radius: 12px;

  width: 80%;
  min-height: 40%;
  margin: 1.5rem auto;
  color: #FCFCFC;

  display: flex;
  flex-direction: column;

  h3 {
    font-size: 2rem;
    color: #FCB813;
  }

  p {
    font-size: 1.6rem;
  }

  p:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media(min-width: 1200px) {
    display: flex;
    flex-direction: row;

    h3 {
      font-size: 3rem;
    }
  }
`

const DateBox = styled.div`
  background-color: #202024;  
  font-size: 5rem;
  padding: 2rem;

  h4 {
    text-align: center;
  }

  @media(min-width: 1200px) {
    width: 25%;
    font-size: 9rem;
    padding: 3.5rem;
  }
`

const DescBox = styled.div`
  padding: 4rem;

  @media(min-width: 1200px) {
    width: 75%;
  }
`

const CardCronology = (props: CardCronologyProps) => {
  return (
    <Cronology>
      <DateBox>
        <h4>{props.date}</h4>
      </DateBox>
      <DescBox>
        {props.events.map((event) => {
          return (
            <>
              <h3>{event.title}</h3>
              <p>
                {event.desc}
              </p>
            </>
          )
        })}
      </DescBox>
    </Cronology>
  )
}

export default CardCronology
