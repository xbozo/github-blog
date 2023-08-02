import styled from 'styled-components'

export const PostContainer = styled.div`
  padding: 4rem 3.2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2.4rem;

  img {
    width: 100%;
    border-radius: 8px;
    margin: 0.8rem 0;
  }

  h1,
  h2,
  h3 {
    color: var(--blue);
  }

  ul {
    list-style: inherit;
    padding-left: 2rem;
  }

  pre {
    background: var(--base-post);
    padding: 1.6rem;
    border-radius: 8px;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      font-size: 1.3rem;

      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
