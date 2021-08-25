import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { ApplicationRoutes } from "../../constants/enums/AplicationRoutes";

interface PageProps {
  exact?: boolean;
  LayoutManager: any;
  Component: any;
  needAuthentication?: boolean;
  path: string;
}
export default function Page({
  exact,
  LayoutManager,
  Component,
  needAuthentication,
  path,
}: PageProps) {
  const login: number = useSelector((state: any) => state.stores?.id);

  if (needAuthentication && !login) {
    return <Redirect to={ApplicationRoutes.LOGIN} />;
  } else if (!needAuthentication && login && path === ApplicationRoutes.LOGIN) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...exact}
      path={path}
      render={(matchProps) => (
        <LayoutManager>
          <Component {...matchProps} />
        </LayoutManager>
      )}
    />
  );
}

//   if (signed && !isPrivate && path !== "/not-found") {
//     return <Redirect to="/dashboard" />;
//   }
