import { Route } from "react-router-dom";

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
