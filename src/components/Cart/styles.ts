import { styled } from "@/styles";

export const CartButton = styled("button", {
  variants: {
    active: {
      true: {
        svg: {
          color: "$gray300",
        },
      },
      false: {
        svg: {
          color: "$grayIcon",
        },
      },
    },
  },
  position: "relative",
  backgroundColor: "$gray800",
  padding: "0.75rem",
  borderRadius: "6px",
  border: 0,
  cursor: "pointer",
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
