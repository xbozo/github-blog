import styled from 'styled-components'

export const Container = styled.section`
  background-color: var(--base-post);
  padding: 3.2rem;
  border-radius: 8px;
  max-width: calc(50% - 1.6rem);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;

  .post-title {
    flex: 1;
    color: var(--base-title);
    font-size: 1.9rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    word-wrap: break-word;
  }

  .post-date {
    width: 20%;
    color: var(--base-span);
    font-size: 1.4rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    text-align: end;
  }
`

export const PostDesc = styled.p`
  color: var(--base-text);
  font-size: 1.5rem;
  font-family: 'Nunito', sans-serif;
`
