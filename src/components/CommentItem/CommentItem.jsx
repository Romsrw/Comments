import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import Gravatar from "react-gravatar";
import { Button, Card, CardContent, Collapse, Typography } from "@mui/material";
import { Box } from "@mui/system";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ru } from "date-fns/locale";

const useStyle = makeStyles({
  commentsItem: {
    padding: "10px",
    marginBottom: "10px",
  },
  cardMediaWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardMedia: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    margin: "0 30px",
    borderRadius: "50%",
  },
  cardContent: {
    margin: 0,
    padding: "10px",
  },
  text: {
    wordBreak: "break-all",
  },
  ratingWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "center",
  },
  rating: {
    padding: "0px 20px",
  },
});

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
    <Card className={classes.commentsItem}>
      <Collapse in={isOpen} collapsedSize={40}>
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
            <CardContent className={classes.cardContent}>
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
            </CardContent>
          </>
        )}
      </Collapse>
    </Card>
  );
};

export default CommentItem;
