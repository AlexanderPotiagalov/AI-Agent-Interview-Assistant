import { ReactNode } from "react";

// destructor children from props and making children type ReactNode
const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
