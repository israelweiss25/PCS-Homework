import { useState, useEffect } from 'react';
export default function Comments(props) {
    const postId = props.postId;
    const [comments, setComments] = useState(null);
    const [showComments, setShowComments] = useState(false);
    useEffect(() => async function fetchComments() {
        try {
            const r = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            if (!r.ok) {
                throw new Error(`${r.status} - ${r.statusText}`);
            }
            const comment = await r.json();
            console.log(comment);
            setComments(comment);
        } catch (error) {
            console.error(error);
            
        }
    }, []);
    const styles = {
        display: showComments ? 'flex' : 'none',
        position: 'absolute',
        top: '96%',
        left: '0px'
    }
    return (
        <>
            <button onClick={() => setShowComments(!showComments)}>{showComments ? 'hide comments' : 'show comments'}</button>
            {showComments && <div className="commentSectionHolder" style={styles}>
                <ul className="commentSection">
                    {comments?.map(comment => <li key={comment.id} className='comment'>
                        <p id="body">{comment.body}</p>
                        <p id="name">{comment.name} <span id="email">  {comment.email}</span></p>
                    </li>)}
                </ul>
            </div>}
        </>
    )
}