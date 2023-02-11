import { Container } from "@mui/material";
import CommentsList from "./components/CommentsList/CommentsList";
import { useStyle } from "./App.style";

/**
 * Главный компонент приложения
 */

const App = () => {
  const classes = useStyle();
  return (
    <Container className={classes.app}>
      <CommentsList />
    </Container>
  );
};

export default App;
