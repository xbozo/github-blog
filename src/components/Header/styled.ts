import styled from 'styled-components'
import coverImg from '../../assets/Cover.svg'

export const HeaderContainer = styled.header`
  background-image: url(${coverImg});
  background-size: cover;
  background-position: center;
  height: 30rem;

  img {
    width: 150rem;
    height: 30rem;
  }
`
