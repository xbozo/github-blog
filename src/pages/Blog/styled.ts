import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;

  @media (max-width: 92rem) {
    padding: 0 1.6rem;
  }
`

export const ContentContainer = styled.div`
  max-width: 90rem;
  margin: auto;

  .loading-icon-container {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }
`

export const PostsContainer = styled.main`
  max-width: 90rem;
  gap: 3.2rem;
  margin-top: 6rem;
  display: flex;
  flex-wrap: wrap;
`

export const NotFoundContainer = styled.div`
  margin: auto;
`
