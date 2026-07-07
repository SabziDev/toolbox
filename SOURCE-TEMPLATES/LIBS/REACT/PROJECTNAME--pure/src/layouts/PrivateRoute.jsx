import { Navigate, useOutlet } from "react-router";

const PrivateRoute = () => {
  const outlet = useOutlet();
  const { NAME, isNAMELoading } = use(NameAuthContext);

  if (isNAMELoading) return;

  return NAME ? outlet : <Navigate to="/LINK" replace />;
};

export default PrivateRoute;
