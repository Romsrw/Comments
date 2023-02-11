import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  wrapperList: {
    overflow: "auto",
    flex: 1,
  },
  commentsList: {
    padding: "10px",
  },
  emptyTextWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "50px 0",
  },
});
