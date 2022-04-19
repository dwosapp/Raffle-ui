import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo/Logo'

import Calendar from '../../Icons/Cal'
import Swap from '../../Icons/Dex'
import Discord from '../../Icons/Discord'
import Docs from '../../Icons/Docs'
import Instagram from '../../Icons/Instagram'
import Profits from '../../Icons/Profits'
import Raffles from '../../Icons/Raffles'
import Rarity from '../../Icons/Rarity'
import Safe from '../../Icons/Safe'
import Stake from '../../Icons/Stake'
import Twitter from '../../Icons/Twitter'

const Section = styled.section`
width: 100%;
flex-direction: column;
background-color: ${(props: { theme: { body: any } }) => props.theme.body};
color: ${(props: { theme: { text: any } }) => props.theme.text};

`

const Container = styled.div`
width: 100%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
left: 0;
bottom: 5vw;
right: 0;

border-bottom: 1px solid ${(props: { theme: { text: any } }) => props.theme.text};

@media (max-width: 48em) {
width: 90%;

h1{
font-size: ${(props: { theme: { fontxxxl: any } }) => props.theme.fontxxxl};

}
}
`
const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em) {
width: 100%;
}
`

const LeftPhone = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (min-width: 48.1em) {
  display: none;
}
`

const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em) {
display: none;
}
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
  padding-right: 0.5rem;
  transition: all 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
}
`
// You are supporting and encouraging us by not removing this section //
const Bottom = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 1vw;
margin-bottom: 3vw;
margin-right: 1vw;

@media (max-width: 48em) {
flex-direction: column;
width: 100%;

a{
  display: flex;
}
}
`

const Footer = () => {

  
  return (
    <Section>
  <Container>
    <Left>
      <Logo />
      <LeftPhone>
        <IconList>
          <a href="https://docs.dwos.app/" target='_blank' 
          rel="noopener noreferrer"
          aria-label='docs'
          >
            <Docs />
          </a>
          <a href="https://instagram.com/DWoSol/" target='_blank' 
          rel="noopener noreferrer"
          aria-label='instagram'
          >
            <Instagram />
          </a>
          <a href="https://twitter.com/DWoSol/" target='_blank' 
          rel="noopener noreferrer"
          aria-label='twitter'
          >
            <Twitter />
          </a>
          <a href="https://discord.gg/gXpvbWftH7" target='_blank' 
          rel="noopener noreferrer"
          aria-label='discord'
          >
            <Discord />
          </a>
        </IconList>
      </LeftPhone>
    </Left>
    <Right> 
      <IconList>
      <a href="#" target='_blank' 
      rel="noopener noreferrer"
      aria-label='calendar'
      >
        <Calendar />
      </a>
      <a href="#" target='_blank' 
      rel="noopener noreferrer"
      aria-label='safe'
      >
        <Safe />
      </a>
      <a href="#" target='_blank' 
      rel="noopener noreferrer"
      aria-label='profits'
      >
        <Profits />
      </a>
      <a href="#" target='_blank' 
      rel="noopener noreferrer"
      aria-label='rarity'
      >
        <Rarity />
      </a>
      <a href="#" target='_blank' 
      rel="noopener noreferrer"
      aria-label='swap'
      >
        <Swap />
      </a>
      <a href="https://staking.dwos.app/" target='_blank' 
      rel="noopener noreferrer"
      aria-label='stake'
      >
        <Stake />
      </a>
      <a href="https://raffle.dwos.app/raffles" target='_blank' 
      rel="noopener noreferrer"
      aria-label='raffles'
      >
        <Raffles />
      </a>
      <a href="https://docs.dwos.app/" target='_blank' 
      rel="noopener noreferrer"
      aria-label='docs'
      >
        <Docs />
      </a>
      <a href="https://instagram.com/DWoSol/" target='_blank' 
      rel="noopener noreferrer"
      aria-label='instagram'
      >
        <Instagram />
      </a>
      <a href="https://twitter.com/DWoSol/" target='_blank' 
      rel="noopener noreferrer"
      aria-label='twitter'
      >
        <Twitter />
      </a>
      <a href="https://discord.gg/gXpvbWftH7" target='_blank' 
      rel="noopener noreferrer"
      aria-label='discord'
      >
        <Discord />
      </a>
      </IconList>
    </Right>
  </Container>
  {/* You are supporting and encouraging us by not removing this section */}
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Doodle Women of Solana. All rights reserved.
        </span>
        <span>
          <a style={{ textDecoration: 'underline', color: 'black' }} href="https://github.com/dwosapp/Raffle-ui">This is an Open-Source frontend created with &#10084; by DWOS Team</a>
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer