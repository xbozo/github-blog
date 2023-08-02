import styled from 'styled-components'

export const PostContainer = styled.div`
  margin-top: -6rem;
  padding: 3.2rem 4rem;
  background: var(--base-profile);
  border-radius: 10px;
  display: flex;
  justify-content: center;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2.4rem;
  margin-left: 2.4rem;

  .post-name {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: var(--base-title);
      font-size: 2.4rem;
      font-weight: 700;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: var(--blue);
      font-family: 'Nunito', sans-serif;
      font-size: 1.2rem;
      font-weight: 700;
      text-transform: uppercase;

      &:hover {
        border-bottom: 1px solid var(--blue);
      }
    }
  }

  .post-info {
    display: inline-flex;
    align-items: center;
    gap: 2.4rem;

    span {
      display: inline-flex;
      align-items: center;
      color: var(--base-subtitle);
      font-size: 1.6rem;
      font-weight: 400;
      gap: 0.8rem;
      transition: color 0.2s;
      color: var(--base-span);

      &:hover {
        color: var(--base-title);
      }

      svg {
        width: 1.8rem;
        height: 1.8rem;
        color: var(--base-label);
      }
    }
  }
`
