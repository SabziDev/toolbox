import { use } from "react";
import { Navigate } from "react-router";

import MainLayout from "./MainLayout/MainLayout";

const PrivateRoute = () => {
  const { NAME, isNAMELoading } = use(NameAuthContext);

  if (isNAMELoading) return;

  return NAME ? <MainLayout /> : <Navigate to="/LINK" replace />;
};

export default PrivateRoute;
