import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useStyle } from "./CommentForm.syle";

/**
 * Форма создания комментария
 * @param {function} createNewComment - метод для создания нового комментария.
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

  const handleChangeName = (event) => {
    setComment((prev) => ({ ...prev, name: event.target.value }));
    setErrors((prev) => ({
      ...prev,
      name: event.target.value.trim() ? false : true,
    }));
  };

  const handleChangeEmail = (event) => {
    const regexEmail = /\S+@\S+\.\S+/;
    if (!!event.target.value && !regexEmail.test(event.target.value)) {
      setErrors((prev) => ({ ...prev, email: true }));
    } else {
      setErrors((prev) => ({ ...prev, email: false }));
    }
    setComment((prev) => ({ ...prev, email: event.target.value }));
  };

  const handleChangeText = (event) => {
    setComment((prev) => ({ ...prev, text: event.target.value }));
    setErrors((prev) => ({
      ...prev,
      text: event.target.value.trim() ? false : true,
    }));
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

  const addNewComment = (event) => {
    event.preventDefault();
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
      name: false,
      email: false,
      text: false,
    });
  };

  return (
    <Box className={classes.formWrapper}>
      <Typography>Новый комментарий</Typography>
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
          margin="dense"
          value={comment.email}
          error={errors.email}
          onChange={handleChangeEmail}
        />
        <TextField
          id="text"
          label="Комментарий"
          multiline
          rows={5}
          variant="outlined"
          size="small"
          margin="dense"
          value={comment.text}
          error={errors.text}
          onChange={handleChangeText}
        />
        <Button
          type="submit"
          size="medium"
          variant="contained"
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
