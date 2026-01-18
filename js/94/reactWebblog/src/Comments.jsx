import { useState} from 'react';
import useFetch from './fecthData.jsx';

export default function Comments(props) {
    const postId = props.postId;
    const [showComments, setShowComments] = useState(false);
    
    const {data : comments, error} = useFetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, postId);
   
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