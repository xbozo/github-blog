import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { api } from '../../libs/axios'
import { IPost } from '../Blog'
import { PostContent } from './components/PostContent'
import { PostHeader } from './components/PostHeader'
import * as C from './styled'

const username = 'xbozo'
const repoName = 'github-blog'

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const fetchPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )

      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchPostDetails()
  }, [fetchPostDetails])

  return (
    <C.Container>
      <Header />

      <C.ContentContainer>
        {isLoading ? (
          <div className="loading-container">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <PostHeader postData={postData} />
            <PostContent />
          </>
        )}
      </C.ContentContainer>
    </C.Container>
  )
}
