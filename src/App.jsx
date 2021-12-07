import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  app: {
    margin: "20px 0",
    height: "calc(100vh - 40px)",
    boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
  },
});

const App = () => {
  const classes = useStyle();
  return <Container className={classes.app}>comments</Container>;
};

export default App;
