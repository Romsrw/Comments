import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * Компонент фомра создания комментария
 * @param {function} createNewComment - callback фукнция, для создания нового комментария
 */

const CommentForm = ({ createNewComment }) => {
  const [comment, setComment] = useState({ name: "", email: "", text: "" });

  const addNewComment = (e) => {
    e.preventDefault();
    const newComment = {
      ...comment,
      id: uuidv4(),
      timestamp: Date.now(),
      rating: 0,
    };
    createNewComment(newComment);
    setComment({ name: "", email: "", text: "" });
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="name"
        label="Имя"
        variant="outlined"
        size="small"
        value={comment.name}
        onChange={(e) => setComment({ ...comment, name: e.target.value })}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        size="small"
        value={comment.email}
        onChange={(e) => setComment({ ...comment, email: e.target.value })}
      />
      <TextField
        id="text"
        label="comment"
        variant="outlined"
        size="small"
        value={comment.text}
        onChange={(e) => setComment({ ...comment, text: e.target.value })}
      />
      <Button
        type="submit"
        size="small"
        variant="contained"
        onClick={addNewComment}
      >
        Добавить
      </Button>
    </Box>
  );
};

export default CommentForm;
