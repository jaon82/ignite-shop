import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  button: {
    position: "relative",
    backgroundColor: "$gray800",
    padding: "0.75rem",
    borderRadius: "6px",
    border: 0,
    cursor: "pointer",

    svg: {
      color: "$grayIcon",
    },
  },
});

export const ItemsCounter = styled("span", {
  width: 24,
  height: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$green500",
  borderRadius: 10,
  position: "absolute",
  top: -10,
  right: -10,
  color: "$white",
  fontWeight: "bold",
});
