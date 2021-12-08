import { makeStyles } from '@mui/styles';
import Gravatar from 'react-gravatar';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ru } from 'date-fns/locale';

const useStyle = makeStyles({
  commentsItem: {
    padding: '10px',
    marginBottom: '10px',
  },
  cardMediaWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  cardMedia: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    margin: '0 30px',
    borderRadius: '50%',
  },
  date: {
    position: 'relative',
    right: 0,
  },
  cardContent: {
    margin: 0,
    padding: '10px',
  },
  ratingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'center',
  },
  rating: {
    padding: '0px 20px',
  },
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
      <Box className={classes.cardMediaWrapper}>
        <Box className={classes.cardMedia}>
          <Gravatar className={classes.avatar} alt={name} email={email} />
          <Typography variant='h5'>{name}</Typography>
        </Box>
        <Typography className={classes.date}>
          {formatDistanceToNow(new Date(timestamp), {
            locale: ru,
            addSuffix: true,
          })}
        </Typography>
      </Box>
      <CardContent className={classes.cardContent}>
        <Typography>{text}</Typography>
        <Box className={classes.ratingWrapper}>
          <Button variant='contained' size='small'>
            -
          </Button>
          <Typography className={classes.rating}>{rating}</Typography>
          <Button variant='contained' size='small'>
            +
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CommentItem;
