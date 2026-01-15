import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router';
// import { useState, useEffect } from 'react'
import Header from './Header.jsx';
import Home from './Home.jsx';
import Blog from './Blog.jsx';
import './App.css'
import { StrictMode } from 'react';
import Footer from './Footer.jsx';
import useFetch from './fecthData.jsx';

function App() {
  const {data: blogs, error} = useFetch(`https://jsonplaceholder.typicode.com/users`);
  const {data: images, imageErr} = useFetch('https://picsum.photos/v2/list?page=2&limit=100');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
             { error ? (<div>{error}</div>) : (
              <>
              <Header />
              <main>
              {blogs && images && <Outlet />}
              </main>
              <Footer /></>)}
            </>
          }>

            <Route index element={<Home blogs={blogs} />} />
            <Route path="/blog/:id" element={<Blog blogs={blogs} images ={images}/>} />
            <Route path="*" element={<div>page not found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
