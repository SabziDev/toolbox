import { Navigate, useOutlet } from "react-router";

const isACCESSIBLE = false;

const PrivateRoute = () => {
  const outlet = useOutlet();

  if (!isACCESSIBLE) {
    return <Navigate to="/" replace />;
  }

  return outlet;
};

export default PrivateRoute;
