import { keyframes, styled } from "@/styles";

const fadeIn = keyframes({
  "0%": { opacity: "0" },
  "100%": { opacity: "1" },
});

const fadeOut = keyframes({
  "0%": { opacity: "0" },
  "100%": { opacity: "1" },
});

export const OrderContainer = styled("div", {
  variants: {
    show: {
      true: {
        display: "flex",
      },
      false: {
        display: "none",
      },
    },
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "$gray800",
  position: "absolute",
  right: 0,
  top: 0,
  height: "100%",
  padding: "3rem",
  zIndex: 1,
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

export const OrderItem = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: "1.25rem",
});

export const ImageContainer = styled("div", {
  width: 95,
  height: 95,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
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

export const RemoveLink = styled("button", {
  background: "none",
  border: "none",
  cursor: "pointer",
  width: "fit-content",
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
