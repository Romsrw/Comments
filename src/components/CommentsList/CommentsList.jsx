import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CommentItem from "../CommentItem/CommentItem";

const useStyle = makeStyles({
    commentsList: {
        padding: "10px",
    },
});

/**
 * Компонент списка комментариев
 */

const CommentsList = () => {
  const classes = useStyle();
  const [comments, setComments] = useState([
    {
      id: uuidv4(),
      name: "Ivan Ivanov",
      email: "ivanov@gmail.com",
      timestamp: 1607395224000,
      text: `A random paragraph can also be an excellent way for a writer 
             to tackle writers' block. Writing block can often happen due to being 
             stuck with a current project that the writer is trying to complete. 
             By inserting a completely random paragraph from which to begin, 
             it can take down some of the issues that may have been causing the writers' 
             block in the first place.`,
      rating: 5,
    },
    {
      id: uuidv4(),
      name: "Petr Petrov",
      email: "Petrov@gmail.com",
      timestamp: 1628390424000,
      text: `Another productive way to use this tool to begin a daily writing routine. 
               One way is to generate a random paragraph with the intention to try to rewrite 
               it while still keeping the original meaning. The purpose here is to just get the
               writing started so that when the writer goes onto their day's writing projects, 
               words are already flowing from their fingers..`,
      rating: -5,
    },
  ]);
  return (
    <Box className={classes.commentsList}>
      {comments.map((comment) => <CommentItem key={comment.id} comment={comment}/>)}
    </Box>
  );
};

export default CommentsList;
