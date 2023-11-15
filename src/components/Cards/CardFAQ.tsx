import styled from "styled-components"
import { PiCaretDownBold } from "react-icons/pi";
import { SlClose } from "react-icons/sl";
import { MouseEventHandler, useState } from "react"

type CardFAQProps = {
  question: string
  answer: string
}

const FAQ = styled.div`
  position: relative;
  width: 80%;
  background: #202024; 
  box-shadow: #202024 0px 5px 15px;
  padding: 3rem;
  margin: 1rem auto; 
  transition: all 1s;

  p {
    width: 80%;
    margin-top: 1rem;
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
  }

  &:hover {
    cursor: pointer;
  }
`

const CardFAQ = (props: CardFAQProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleCardHandler: MouseEventHandler = () => {
    if (isOpen) { setIsOpen(false) }
    if (!isOpen) { setIsOpen(true) }
    console.log("HAHAHAH")
  }

  return (
    <FAQ onClick={toggleCardHandler}>
      <h3>{props.question}</h3>
      {
        isOpen ? <p>{props.answer}</p> : ""
      }
      {
        isOpen ?
          <SlClose className="icon" onClick={toggleCardHandler} />
          :
          <PiCaretDownBold className="icon" onClick={toggleCardHandler} />
      }

    </FAQ>
  )
}

export default CardFAQ
