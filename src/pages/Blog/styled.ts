import styled from 'styled-components'
import coverImg from '../../assets/Cover.svg'

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  header {
    background-image: url(${coverImg});
    background-size: cover;
    height: 30rem;

    img {
      width: 150rem;
      height: 30rem;
    }
  }
`

export const ContentContainer = styled.div`
  max-width: 90rem;
  margin: auto;
`

export const PostsContainer = styled.main`
  max-width: 90rem;
  gap: 3.2rem;
  margin-top: 6rem;
  display: flex;
  flex-wrap: wrap;
`
