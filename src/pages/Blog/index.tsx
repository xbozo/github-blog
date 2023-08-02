import * as C from './styled'

import { useCallback, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { api } from '../../libs/axios'
import { Post } from './components/Post'
import { Profile } from './components/Profile/index'
import { SearchInput } from './components/SearchInput'

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

const username = 'xbozo'
const repoName = 'github-blog'

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchPosts = useCallback(async (query: string = '') => {
    setIsLoading(true)

    try {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`,
      )
      setPosts(response.data.items)
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <C.Container>
      <Header />

      <C.ContentContainer>
        <Profile />
        <SearchInput postsLength={posts.length} fetchPosts={fetchPosts} />

        {isLoading ? (
          <div className="loading-icon-container">
            <LoadingSpinner />
          </div>
        ) : (
          <C.PostsContainer>
            {posts.length >= 1 &&
              posts.map((post) => <Post key={post.number} post={post} />)}
            {posts.length <= 0 && (
              <C.NotFoundContainer>
                <span className="result-notfound">
                  Nenhum resultado encontrado
                </span>
              </C.NotFoundContainer>
            )}
          </C.PostsContainer>
        )}
      </C.ContentContainer>
    </C.Container>
  )
}
