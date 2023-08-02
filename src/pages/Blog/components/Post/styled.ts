import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  background-color: var(--base-post);
  padding: 3.2rem;
  border-radius: 8px;
  max-width: calc(50% - 1.6rem);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  border: 2px solid var(--base-post);
  transition: 0.4s;

  &:hover {
    border: 2px solid var(--base-label);
  }
`

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;

  .post-title {
    flex: 1;
    padding-right: 2.4rem;
    color: var(--base-title);
    font-size: 1.9rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    word-wrap: break-word;
  }

  .post-date {
    color: var(--base-span);
    font-size: 1.4rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    text-align: end;
    line-height: 200%;
  }
`

export const PostDesc = styled.p`
  flex: 1;
  color: var(--base-text);
  font-size: 1.5rem;
  font-family: 'Nunito', sans-serif;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Limita o texto a ser exibido em 3 linhas */
  -webkit-box-orient: vertical; /* Define a orientação do texto como vertical */
`
