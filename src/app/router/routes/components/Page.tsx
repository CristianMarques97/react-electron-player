import { Route } from "react-router-dom";

interface PageProps {
  LayoutManager: any;
  Component: any;
  needAuthentication?: boolean;
  path: string;
}
export default function Page({
  LayoutManager,
  Component,
  needAuthentication,
  path,
}: PageProps) {
  return (
    <Route
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
