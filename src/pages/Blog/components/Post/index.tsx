import * as C from './styled'

export function Post() {
  return (
    <C.Container>
      <C.PostInfo>
        <h3 className="post-title">
          JavaScript data types and data structures
        </h3>
        <span className="post-date">Há 1 dia</span>
      </C.PostInfo>

      <C.PostDesc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ut
        nobis! Doloribus repellat veniam, neque, numquam dolorem maxime itaque
        suscipit molestiae maiores quasi a est quis. Consectetur id quaerat
        quia!
      </C.PostDesc>
    </C.Container>
  )
}
