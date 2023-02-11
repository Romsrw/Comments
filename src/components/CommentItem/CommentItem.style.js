import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  commentsItem: {
    marginBottom: "10px",
    width: "100%",
    boxShadow: "0px 5px 9px 3px rgba(34, 60, 80, 0.12)",
    borderRadius: "8px",
  },
  collapseWrapper: {
    width: "100%",
  },
  cardMediaWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "20px",
  },
  cardMedia: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    margin: "0 20px",
    borderRadius: "50%",
  },
  text: {
    wordBreak: "break-all",
    paddingBottom: "12px",
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
