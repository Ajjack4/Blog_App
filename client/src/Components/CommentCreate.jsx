import { useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const CommentCreate = ({ postId }) => {
    const [comment, setComment] = useState("");

    const onSubmit = async () => {
        
        await axios.post(`http://posts.com/posts/${postId}/comments`, { content:comment });
        setComment(" ");
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Comment</label>
                <div className="form-group">
                    <input
                        type="text"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="form-control"
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CommentCreate;
