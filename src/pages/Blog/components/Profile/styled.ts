import styled from 'styled-components'

export const Profile = styled.div`
  margin-top: -6rem;
  padding: 3.2rem 4rem;
  background: var(--base-profile);
  border-radius: 10px;
  display: flex;
  justify-content: center;

  .profile-avatar {
    width: 15rem;
    height: 15rem;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2.4rem;
  margin-left: 2.4rem;

  .profile-name {
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
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid var(--blue);
      }
    }
  }

  .profile-desc {
    color: var(--base-text);
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }

  .profile-info {
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
      color: var(--base-subtitle);

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
