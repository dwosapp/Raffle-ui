import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import img1 from '../../../assets/logo.png';

const Logoimg = styled.h1`
  align-items: center;
  display: flex;

@media (max-width: 64em){
  align-items: center;
  display: flex;
}
`

const Logo = () => {
  return (
    <Link to="/">
      <Logoimg>
        <img width={90} src={img1} alt="DWOS"/>
      </Logoimg>
    </Link>
  )
}

export default Logo