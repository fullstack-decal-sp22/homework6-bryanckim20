import axios from "axios";
import React, { useState} from 'react';

const Comments = ({ comments, postID }) => {
    const [comment, setComment] = useState();
    
    const onSubmit = () => {
        axios
            .post(`http://localhost:3002/post/${postID}/comment`, {
                "newComment": comment
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        
    }

    return <div>
        {
            comments?.map(c =>
            <p> {c} </p>
            )
        }
        <div>
        
        <input 
         type="text"
         placeholder="Your comment here" 
         value={comment} 
         onChange={(event) => 
         setComment(event.target.value)} />
        
        </div>
        <button 
        style={{ marginTop: '5px', padding: '2px', fontSize: '0.6em'}} 
        onClick={onSubmit}>
        Submit
        </button>
    </div>
};

export default Comments;