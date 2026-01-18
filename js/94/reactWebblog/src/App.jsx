import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Blog from './Blog.jsx';
import { StrictMode } from 'react';
import Footer from './Footer.jsx';
import useFetch from './fecthData.jsx';
import Post from './post.jsx';
import { useState } from 'react';

function App() {
  const { data: blogs, error, isLoading } = useFetch(`https://jsonplaceholder.typicode.com/users`);
  const { data: images, imageErr, imageIsLoading } = useFetch('https://picsum.photos/v2/list?page=2&limit=100');

  const [isPost, setIsPost] = useState();
  const setPostinfo = (postInfo) => {
    setIsPost(postInfo);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              {isLoading && <div>Loading...</div>}
              {error || imageErr ? (<div>{error || imageErr}</div>) : (
                <>
                  <Header isPost={isPost} />
                  <main>
                    {blogs && images && <Outlet />}
                  </main>
                  <Footer /></>)}
            </>
          }>
            <Route index element={<Home blogs={blogs} />} />
            <Route path="/blog/:id" element={<Blog blogs={blogs} images={images} />} />
            <Route path='/blog/:id/post/:postId' element={<Post blogs={blogs} images={images} setPostinfo={setPostinfo} />} />
          </Route>
          <Route path="*" element={<div style={{backgroundColor: 'white'}}>page not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
