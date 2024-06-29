import { TRole } from "@/@types";
import React from "react";
import { Params, RouteObject } from "react-router";

export interface ICrumb {
  label: {
    key?: string;
    fallback: string;
  };
  path: string;
}
export interface IRoute {
  path?: string;
  element?: React.ElementType;
  pageTitle?: string;
  component?:
    | React.ReactNode
    | React.Component
    | React.JSX.Element
    | (() => React.JSX.Element);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  crumbs?: (p: any) => ICrumb[];
  roles?: TRole[];
  children?: IRoute[];
}

export type TCustomRouteObject =
  | RouteObject
  | {
      roles: TRole[];
    };
export const createRoutes = (routes: IRoute[]): RouteObject[] => {
  if (routes?.length === 0) return [];
  return routes?.map((route: IRoute) => {
    return {
      path: `${route?.path}`,
      element: route.element && (
        <route.element
          title={route?.pageTitle}
          roles={route?.roles}
          component={route?.component}
        />
      ),
      roles: route?.roles,
      handle: {
        crumb: (params: Params) => {
          return route.crumbs ? route.crumbs(params)?.[0] : [];
        },
      },
      children: route?.children && createRoutes(route?.children),
    };
  });
};
