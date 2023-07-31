import { AiFillGithub } from 'react-icons/ai'
import {
  BsBoxArrowUpRight,
  BsFillBuildingFill,
  BsPeopleFill,
} from 'react-icons/bs'
import * as C from './styled'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoadingSpinner } from '../../../../components/LoadingSpinner'

interface ProfileDataType {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileDataType>(
    {} as ProfileDataType,
  )

  const [isLoading, setIsLoading] = useState(true)

  async function fetchProfile() {
    setIsLoading(true)

    const response = await axios.get('https://api.github.com/users/xbozo', {
      params: {
        ID: 12345,
      },
    })

    setProfileData(response.data)

    setTimeout(() => {
      //  delay intencional pra ver as alterações do loading
      setIsLoading(false)
    }, 1000)
  }

  console.log(profileData)

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <C.Profile>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <img
            src={profileData.avatar_url}
            alt="Foto de perfil"
            className="profile-avatar"
          />

          <C.ProfileContent>
            <div className="profile-name">
              <h2>{profileData.name}</h2>
              <Link to={profileData.html_url} target="_blank">
                <span>Github</span>
                <BsBoxArrowUpRight />
              </Link>
            </div>

            <p className="profile-desc">{profileData.bio}</p>

            <div className="profile-info">
              <span className="info-github">
                <AiFillGithub />
                {profileData.login}
              </span>
              {profileData.company ? (
                <span className="info-org">
                  <BsFillBuildingFill />
                  {profileData.company}
                </span>
              ) : (
                ''
              )}

              <span className="info-followers">
                <BsPeopleFill />
                {profileData.followers} seguidores
              </span>
            </div>
          </C.ProfileContent>
        </>
      )}
    </C.Profile>
  )
}
