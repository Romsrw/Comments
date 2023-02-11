import { useEffect, useState } from "react";
import Gravatar from "react-gravatar";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ru } from "date-fns/locale";
import { Box } from "@mui/system";
import { Button, Collapse, ListItem, Typography } from "@mui/material";
import { useStyle } from "./CommentItem.style";

/**
 * Компонент комментария
 * @param {object} comment - комментарий
 * @param {function} handleChangeRating - метод изменения рейтинга комментария
 */

const CommentItem = ({ comment, handleChangeRating }) => {
  const classes = useStyle();
  const [isOpen, setIsOpen] = useState(true);
  const { id, name, email, timestamp, text, rating } = comment;

  useEffect(() => {
    if (rating < -10) {
      setIsOpen(false);
    }
  }, [rating]);

  return (
    <ListItem className={classes.commentsItem}>
      <Collapse
        className={classes.collapseWrapper}
        in={isOpen}
        collapsedSize={30}
      >
        {!isOpen ? (
          <Button onClick={() => setIsOpen(true)}>Открыть комментарий</Button>
        ) : (
          <>
            <Box className={classes.cardMediaWrapper}>
              <Box className={classes.cardMedia}>
                <Gravatar className={classes.avatar} alt={name} email={email} />
                <Typography variant="h5">{name}</Typography>
              </Box>
              <Typography>
                {formatDistanceToNow(new Date(timestamp), {
                  locale: ru,
                  addSuffix: true,
                })}
              </Typography>
            </Box>
            <Box className={classes.cardContent}>
              <Typography className={classes.text}>{text}</Typography>
              <Box className={classes.ratingWrapper}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleChangeRating(id, -1)}
                >
                  -
                </Button>
                <Typography className={classes.rating}>{rating}</Typography>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleChangeRating(id, 1)}
                >
                  +
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Collapse>
    </ListItem>
  );
};

export default CommentItem;
