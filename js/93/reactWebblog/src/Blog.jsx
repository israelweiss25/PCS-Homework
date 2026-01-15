import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './blog.css';
import Comments from './Comments.jsx';
import useFetch from './fecthData.jsx';

export default function Blog(props) {
    const { id } = useParams();
    const blog = props.blogs[id - 1]; 
    const images = props.images;

    const {data: posts, error} = useFetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, id);
    const backgrounStyle = {
        backgroundImage: `url('${images[id].download_url}')`,
        backgroundSize: 'cover'
    }
    return (
        <>
            {error && <div>{error}</div>}
            <div id="mainHolder">
                <div id="blogHeader" style={backgrounStyle}>
                        <h1>{blog.name}</h1>
                        <a href= "https://${blog.website}">{blog.website}</a>
                        <p>{blog.company.bs}</p>
                </div>
                <div>
                    <h3>Top Ten Reads</h3>
                    <hr/>
                    <ul id="topReads">
                        {posts && posts.map(post => <li key={post.id}><p>{post.title}</p></li>)}
                    </ul>
                </div>
            </div>
            <ul id="postList"> 
                {posts?.map(post => <li key={post.id} className = 'post'>
                    <img src= {`${images[post.id].download_url}`}/>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <Comments postId = {post.id} />
                
                    </li>)}
            </ul>
        </>
    )
}