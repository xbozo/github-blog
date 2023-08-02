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

  .loading-container {
    display: flex;
    justify-content: center;

    margin-top: -6rem;
    padding: 3.2rem 4rem;
    background: var(--base-profile);
    border-radius: 10px;
  }
`

export const PostsContainer = styled.main``

export const NotFoundContainer = styled.div``
