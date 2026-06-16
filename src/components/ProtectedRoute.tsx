import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  role: string;
}

export function ProtectedRoute({
  children,
  role,
}: Props) {
  const currentUserRole =
    localStorage.getItem("role");

  if (currentUserRole !== role) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}