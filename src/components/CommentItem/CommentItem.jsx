import { makeStyles } from "@mui/styles";
import Gravatar from "react-gravatar";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const useStyle = makeStyles({
  commentsItem: {
    padding: "10px",
    marginBottom: "10px",
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
      padding: '10px'
  },
  ratingWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'end',
      alignItems: 'center'
  },
  rating: {
      padding: '0px 30px'
  }
});

/**
 * Компонент комментария
 * @param {string} id - уникальный индитификатор
 * @param {string} name - имя автора
 * @param {string} email - email автора
 * @param {number} timestamp - время создания комментария
 * @param {string} text - текст комментария
 * @param {number} rating - рейтинг комментария
 *
 */

const CommentItem = ({ comment }) => {
  const classes = useStyle();
  const { id, name, email, timestamp, text, rating } = comment;
  return (
    <Card className={classes.commentsItem}>
      <Box className={classes.cardMedia}>
        <Gravatar className={classes.avatar} alt={name} email={email} />
        <Typography variant="h5">{name}</Typography>
      </Box>
      <CardContent className={classes.cardContent}>
        <Typography>{text}</Typography>
        <Box className={classes.ratingWrapper}>
          <Button variant="contained">-</Button>
          <Typography className={classes.rating}>{rating}</Typography>
          <Button variant="contained">+</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CommentItem;
