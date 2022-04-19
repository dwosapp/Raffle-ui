import React from 'react'
import styled from 'styled-components'

import img1 from '../../../assets/Nfts/1.png';
import img2 from '../../../assets/Nfts/2.png';
import img3 from '../../../assets/Nfts/7.png';
import img4 from '../../../assets/Nfts/4.png';
import img5 from '../../../assets/Nfts/5.png';
import img6 from '../../../assets/Nfts/6.png';

const Section = styled.section`
height: 40rem;
width: 100%;
position: sticky;
justify-content: center;
align-items: center;


border-top: 2px solid ${props => props.theme.text};
background-color: #9999FF;

overflow: hidden;

@media (max-width: 48em) {
height: 40rem;
flex-direction: column;
}
`

const ImgContainer = styled.div`
width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;

img{
    width: 15rem;
    height: auto;
}

@media (max-width: 48em) {
    img{
    width: 10rem;
    height: auto;
}
}
`

const Banner = () => {
  return (
    <Section>
        <ImgContainer>
            <img width={500} height={400}  src={img1} alt="Gen-1" />
            <img width={500} height={400}  src={img2} alt="Gen-1" />
            <img width={500} height={400}  src={img3} alt="Gen-1" />
            <img width={500} height={400}  src={img4} alt="Gen-1" />
            <img width={500} height={400}  src={img5} alt="Gen-1" />
            <img width={500} height={400}  src={img6} alt="Gen-1" />
        </ImgContainer>
    </Section>
  )
}

export default Banner