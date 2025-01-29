import { intervalToDuration, isAfter } from "date-fns"
import { useEffect, useState } from "react"
import styled from "styled-components"

const CountdownTimer = styled.div`
  background-color: #E1E1E6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 2rem;
  height: 5rem;
  margin-top: 8rem;
  
  @media(min-width: 576px) {
    padding: 0 2rem;
  }

  @media(min-width: 768px) {
    padding: 0 4rem;
    height: 9rem;
    justify-content: center;
  }
`

const ClockSpan = styled.p`
  transform: translateY(-1.5rem);
  color: #008F57;

  span {
    font-size: 2.4rem;
    text-align: center;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(18, 19, 15, 0.85);
    padding: 1rem 1rem;
    border-radius: 1rem;
    margin: .5rem;

    @media(min-width: 576px) {
      font-size: 5rem;
      margin: 1rem;
    }

    @media(min-width: 768px) {
      font-size: 9rem;
    }
  }

  @media(min-width: 768px) {
    transform: translateY(-4rem);
    margin: 0 1rem;
  }
`

const Timer = () => {
  const EventDate = new Date(2023, 11, 20, 18, 30)
  const [timer, setTimer] = useState<Duration>(
    intervalToDuration({
      start: new Date(),
      end: EventDate
    })
  )

  useEffect(() => {
    if (!isAfter(new Date(), EventDate)) {
      setTimeout(() => {
        const countdown: Duration = intervalToDuration({
          start: new Date(),
          end: EventDate
        })

        setTimer(countdown)
      }, 1000);
    } else {
      setTimer(intervalToDuration({
        start: new Date(),
        end: new Date(),
      }))
    }
  }, [])

  return (
    <CountdownTimer>
      <ClockSpan>
        <span>{String("0" + timer.days).slice(-2)[0]}</span>
        <span>{String("0" + timer.days).slice(-2)[1]}</span>
      </ClockSpan>
      <ClockSpan>
        <span>{String("0" + timer.hours).slice(-2)[0]}</span>
        <span>{String("0" + timer.hours).slice(-2)[1]}</span>
      </ClockSpan>
      <ClockSpan>
        <span>{String("0" + timer.minutes).slice(-2)[0]}</span>
        <span>{String("0" + timer.minutes).slice(-2)[1]}</span>
      </ClockSpan>
      <ClockSpan>
        <span>{String("0" + timer.seconds).slice(-2)[0]}</span>
        <span>{String("0" + timer.seconds).slice(-2)[1]}</span>
      </ClockSpan>
    </CountdownTimer>
  )
}

export default Timer
