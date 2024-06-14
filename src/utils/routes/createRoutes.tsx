import { TRole } from "@/@types"
import i18n from "@/intl/i18n"
import React from "react"
import { Params, RouteObject } from "react-router"
import { Link } from "react-router-dom"

export interface ICrumb {
    label: {
        key?: string,
        fallback: string
    },
    path: string
}
export interface IRoute {
    path?: string
    element?: React.ElementType
    pageTitle?: string,
    component?: React.ReactNode
    crumbs: (p: any) => ICrumb[]
    roles: TRole[]
    children: IRoute[]
}


export type TCustomRouteObject = RouteObject | {
    roles: TRole[]
}
export const createRoutes = (routes: IRoute[]): TCustomRouteObject[] => {
    if (routes?.length === 0) return []
    return routes?.map((route: IRoute) => {
        console.log(route, "crumbs")
        return {
            path: route?.path,
            element: route.element && <route.element title={route?.pageTitle} roles={route?.roles} component={route?.component} />,
            roles: route?.roles,
            handle: {
                crumb: (params: Params) => {
                    return route?.crumbs(params)?.map((crumb: ICrumb) => {
                        console.log(crumb)
                        return <>
                            <Link to={crumb?.path}>
                                {i18n.t(crumb.label.key ? crumb.label.key : "", crumb.label.fallback)}
                            </Link>
                        </>
                    })
                }
            },
            children: createRoutes(route?.children)
        }
    })
}