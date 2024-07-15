


// eslint-disable-next-line react/prop-types
const CommentList = ({ comments }) => {
  



  // eslint-disable-next-line react/prop-types
  const renderedComments = comments.map((comment) => {

    let content;
    if(comment.status==='approved'){
      content=comment.content;
    }
    if(comment.status==='pending'){
      content='Comment is awaiting Moderation';
    }
    if(comment.status==='rejected'){
      content="This Comment was Deleted"
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
