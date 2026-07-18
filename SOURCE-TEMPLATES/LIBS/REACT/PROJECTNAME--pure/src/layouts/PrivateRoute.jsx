import { use } from "react";
import { Navigate } from "react-router";

import Preloader from "@/components/Preloader/Preloader";
import AppLoadError from "@/services/components/AppLoadError/AppLoadError";

import MainLayout from "./MainLayout/MainLayout";

const PrivateRoute = () => {
  const { NAME, isLoading, isError } = use(NameAuthContext);

  if (isLoading) return <Preloader />;
  if (isError) return <AppLoadError />;

  return NAME ? <MainLayout /> : <Navigate to="/LINK" replace />;
};

export default PrivateRoute;
