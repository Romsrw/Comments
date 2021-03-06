import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CommentsList from "./components/CommentsList/CommentsList";

const useStyle = makeStyles({
  app: {
    margin: "20px auto",
    boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
    backgroundColor: "#fff",
    minHeight: "calc(100vh - 40px)",
  },
});

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
