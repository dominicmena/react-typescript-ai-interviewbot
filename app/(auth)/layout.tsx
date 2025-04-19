import { ReactNode } from "react";

const Authlayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default Authlayout;

// above we are destructuring the children, making them of type ReactNode (anything react can render) then returning the children
