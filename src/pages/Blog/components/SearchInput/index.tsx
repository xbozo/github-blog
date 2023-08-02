import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import * as C from './styled'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInput = zod.z.infer<typeof searchFormSchema>

interface SearchInputProps {
  postsLength: number
  fetchPosts: (query?: string) => Promise<void>
}

export function SearchInput({ postsLength, fetchPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await fetchPosts(data.query)
  }

  return (
    <C.SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div className="search-intro">
        <h3>Publicações</h3>
        <span>{postsLength} publicações</span>
      </div>

      <C.SearchForm>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </C.SearchForm>
    </C.SearchInputContainer>
  )
}
