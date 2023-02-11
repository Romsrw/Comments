import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CommentItem from "../CommentItem/CommentItem";
import CommentForm from "../CommentForm/CommentForm";
import { useStyle } from "./CommentsList.style";

/**
 * Компонент списка комментариев
 */

const CommentsList = () => {
  const classes = useStyle();
  const wrapperRef = useRef(null);
  const [comments, setComments] = useState([
    {
      id: uuidv4(),
      name: "Kyle Mathews",
      email: "mathews.kyle@gmail.com",
      timestamp: 1651777200000,
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
      timestamp: 1674846000000,
      text: `Another productive way to use this tool to begin a daily writing routine.
             One way is to generate a random paragraph with the intention to try to rewrite
             it while still keeping the original meaning. `,
      rating: -11,
    },
    {
      id: uuidv4(),
      name: "Roman Makhalin",
      email: "rn_mahalin@mail.ru",
      timestamp: 1675969200000,
      text: `The purpose here is to just get the
             writing started so that when the writer goes onto their day's writing projects,
             words are already flowing from their finger`,
      rating: 10,
    },
  ]);

  /**
   * Добавление нового комментария
   * @param {object} newComment - новый комментарий
   */

  const createNewComment = (newComment) => {
    setComments((prevComment) => [...prevComment, newComment]);
  };

  /**
   * Изменение рейтинга комментария
   * @param {string} id - уникальный индитификатор
   * @param {number} value - +1 || -1
   */

  const handleChangeRating = (id, value) => {
    setComments((prevComments) =>
      prevComments.map((comment) => ({
        ...comment,
        rating: comment.id === id ? comment.rating + value : comment.rating,
      }))
    );
  };

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        top: wrapperRef.current.scrollHeight - wrapperRef.current.offsetHeight,
      });
    }
  }, [comments.length]);

  return (
    <Box className={classes.container}>
      <Box className={classes.wrapperList} ref={wrapperRef}>
        {comments.length ? (
          <List className={classes.commentsList}>
            {comments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                handleChangeRating={handleChangeRating}
              />
            ))}
          </List>
        ) : (
          <Box className={classes.emptyTextWrapper}>
            <Typography variant="h4">Нет комментариев</Typography>
          </Box>
        )}
      </Box>
      <CommentForm createNewComment={createNewComment} />
    </Box>
  );
};

export default CommentsList;
