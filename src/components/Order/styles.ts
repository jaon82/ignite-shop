import { styled } from "@/styles";
import Link from "next/link";

export const OrderContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "$gray800",
  position: "absolute",
  right: 0,
  top: 0,
  height: "100%",
  padding: "3rem",
});

export const CloseContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  svg: {
    cursor: "pointer",
  },
});

export const BagContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const OrderTitle = styled("h2", {
  color: "$gray100",
});

export const OrderItems = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: "1.25rem",
});

export const ItemInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const ItemName = styled("span", {
  color: "$gray300",
});

export const ItemPrice = styled("span", {
  color: "$gray100",
  fontWeight: "bold",
});

export const RemoveLink = styled(Link, {
  color: "$green500",
  fontWeight: "bold",
  textDecoration: "none",
  "&:hover": {
    color: "$green300",
  },
});

export const OrderFooter = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "3.5rem",

  button: {
    marginTop: "auto",
    backgroundColor: "$green500",
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },
});

export const OrderResume = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const OrderResumeItemContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

export const OrderQuantity = styled("span", {
  fontSize: "$md",
  color: "$gray300",
});

export const OrderTotalTitle = styled("span", {
  fontSize: "$md",
  fontWeight: "bold",
});

export const OrderTotal = styled("span", {
  fontSize: "$xl",
  fontWeight: "bold",
});
