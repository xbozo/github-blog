import { Route, Routes } from 'react-router-dom'

import { Blog } from './pages/Blog'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      {/* <Route path="/post/:postId" element={<Post />} /> */}
    </Routes>
  )
}
