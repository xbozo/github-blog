import styled from 'styled-components'

export const Container = styled.main`
  margin-top: 8rem;

  .search-intro {
    display: flex;
    justify-content: space-between;

    h3 {
      color: var(--base-subtitle);
      font-family: 'Nunito', sans-serif;
      font-size: 1.8rem;
      font-weight: 700;
    }

    span {
      color: var(--base-span);
      font-family: 'Nunito', sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
`

export const SearchForm = styled.form`
  input {
    margin-top: 1.2rem;
    width: 100%;
    padding: 1.2rem 1.6rem;
    background: var(--base-input);
    border: 1px solid var(--base-border);
    border-radius: 8px;
    color: var(--base-text);

    &::placeholder {
      color: var(--base-label);
      font-size: 1.6rem;
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
    }

    &:focus {
      border: 1px solid var(--blue);
    }
  }
`
