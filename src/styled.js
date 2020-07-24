import styled from 'styled-components'
import * as variables from './variables'

export const App = styled.div`
  display: block;
`

export const Header = styled.header`
  background-color: ${variables.black};
  display: flex;
  justify-content: center;

  img {
    height: 80px;
    pointer-events: none;
  }
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  padding: 0 25px;
`

export const Content = styled.div`
  @media (max-width: ${variables.small}) {
    flex-wrap: wrap-reverse;
  }

  h3 {
    font-size: 3rem;
    margin: 0 0 1rem;

    @media (max-width: ${variables.medium}) {
      font-size: 2rem;
    }

    @media (max-width: ${variables.small}) {
      font-size: 1.5rem;
    }
  }
`

export const Heading = styled.h1`
  font-size: 5rem;
  margin: 4rem 0 0;

  @media (max-width: ${variables.medium}) {
    font-size: 3rem;
    margin: 3rem 0 0;
  }

  @media (max-width: ${variables.small}) {
    font-size: 2rem;
    margin: 2rem 0 0;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`

export const Footer = styled.footer`
  background: ${variables.black};
  border-top: solid 5px ${variables.green};
  height: 150px;
  margin-top: 7rem;

  @media (max-width: ${variables.small}) {
    height: 80px;
    margin-top: 4rem;
  }
`

export const Form = styled.div`
  @media (max-width: ${variables.small}) {
    margin-top: 3rem;
  }
`

export const Error = styled.span`
  color: ${variables.grey};
  display: block;
  font-size: 12px;
  position: absolute;
  top: 100%;
  line-height: 2;
`

export const Label = styled.label`
  color: ${variables.grey};
  display: block;
  font-size: 25px;
  font-weight: 500;
  position: relative;

  @media (max-width: ${variables.medium}) {
    font-size: 23px;
  }

  @media (max-width: ${variables.small}) {
    font-size: 20px;
  }
`

export const Input = styled.input`
  border: none;
  border-bottom: 4px solid ${variables.lgrey};
  box-sizing: border-box;
  display: block;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: ${variables.medium}) {
    margin-bottom: 1.8rem;
  }

  @media (max-width: ${variables.small}) {
    margin-bottom: 1.6rem;
  }

  &.error {
    border-color: red;
  }
`

export const Select = styled.select`
  border: none;
  border-bottom: 4px solid ${variables.lgrey};
  box-sizing: border-box;
  display: block;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: ${variables.medium}) {
    margin-bottom: 1.8rem;
  }

  @media (max-width: ${variables.small}) {
    margin-bottom: 1.6rem;
  }

  &.error {
    border-color: red;
  }
`

export const Button = styled.button`
  color: white;
  cursor: pointer;
  width: auto;
  border: none;
  height: auto;
  padding: 10px 40px;
  font-size: 1.5rem;
  min-width: 40px;
  box-sizing: border-box;
  margin-top: 2rem;
  font-weight: 600;
  border-radius: 2px;
  letter-spacing: -1px;
  background-color: ${variables.green};
`

export const Success = styled.div`
  @media (max-width: ${variables.small}) {
    margin-top: 2rem;
  }

  h4 {
    font-size: 2rem;
    margin: 0 0 1rem;

    @media (max-width: ${variables.medium}) {
      font-size: 1.4rem;
    }

    @media (max-width: ${variables.small}) {
      font-size: 1.2rem;
    }
  }

  span {
    color: ${variables.green};
    display: block;
    margin: 1rem 0;
  }
`
