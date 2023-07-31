import * as C from './styled'

export function SearchInput() {
  return (
    <C.Container>
      <div className="search-intro">
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </div>

      <C.SearchForm>
        <input type="text" placeholder="Buscar conteúdo" />
      </C.SearchForm>
    </C.Container>
  )
}
