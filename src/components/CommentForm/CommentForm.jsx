import { makeStyles } from "@mui/styles";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useStyle = makeStyles(() => ({
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
}));

/**
 * Компонент создания комментария
 * @param {function} createNewComment - callback фукнция, для создания нового комментария
 */

const CommentForm = ({ createNewComment }) => {
  const classes = useStyle();
  const [comment, setComment] = useState({ name: "", email: "", text: "" });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    text: false,
  });
  const [formValid, setFormValid] = useState(false);

  const handleChangeName = (e) => {
    setComment((prev) => ({ ...prev, name: e.target.value }));
    setErrors((prev) => ({ ...prev, name: false }));
  };

  const handleChangeEmail = (e) => {
    const regexEmail = /\S+@\S+\.\S+/;
    if (!!e.target.value && !regexEmail.test(e.target.value)) {
      setErrors((prev) => ({ ...prev, email: true }));
    } else {
      setErrors((prev) => ({ ...prev, email: false }));
    }

    setComment((prev) => ({ ...prev, email: e.target.value }));
  };

  const handleChangeText = (e) => {
    setComment((prev) => ({ ...prev, text: e.target.value }));
    setErrors((prev) => ({ ...prev, text: false }));
  };

  useEffect(() => {
    if (
      !comment.name ||
      errors.name ||
      !comment.email ||
      errors.email ||
      !comment.text ||
      errors.text
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    comment.name,
    errors.name,
    comment.email,
    errors.email,
    comment.text,
    errors.text,
  ]);

  const addNewComment = (e) => {
    e.preventDefault();
    if (!comment.name || !comment.email || !comment.text) {
      setErrors({
        name: !comment.name,
        email: !comment.email,
        text: !comment.text,
      });
      return;
    }
    const newComment = {
      ...comment,
      id: uuidv4(),
      timestamp: Date.now(),
      rating: 0,
    };
    createNewComment(newComment);
    setComment({ name: "", email: "", text: "" });
    setErrors({
      nameError: false,
      emailError: false,
      textError: false,
    });
  };
  return (
    <Box className={classes.formWrapper}>
      <Typography>Добавить комментарий</Typography>
      <Box className={classes.form} component="form" autoComplete="off">
        <TextField
          id="name"
          label="Имя"
          variant="outlined"
          size="small"
          margin="dense"
          value={comment.name}
          error={errors.name}
          onChange={handleChangeName}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          size="small"
          error={errors.email}
          value={comment.email}
          margin="dense"
          onChange={handleChangeEmail}
        />
        <TextField
          id="text"
          label="Комментарий"
          multiline
          maxRows={5}
          variant="outlined"
          size="small"
          error={errors.text}
          value={comment.text}
          margin="dense"
          onChange={handleChangeText}
        />
        <Button
          type="submit"
          size="small"
          variant="contained"
          className={classes.btn}
          onClick={addNewComment}
          disabled={!formValid}
        >
          Добавить
        </Button>
      </Box>
    </Box>
  );
};

export default CommentForm;
