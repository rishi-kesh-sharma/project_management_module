import {
  Breadcrumb as ShadBreadCrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb/breadcrumb";
import { useEffect, useState } from "react";
import {
  RouteObject,
  useLocation,
  useMatches,
  useParams,
} from "react-router-dom";

export interface IRouterMatch {
  id: string;
  pathname: string;
  params: string;
  handle: { crumb: (data: string) => void };
}

const Breadcrumb = () => {
  const matches: RouteObject[] = useMatches();
  const params = useParams();
  const location = useLocation();
  const [crumbs, setCrumbs] = useState<React.ReactNode[]>([]);
  console.log(matches, "matches");

  useEffect(() => {
    const lastParamValue = Object.values(params).slice(-1)[0];
    const crumbs = matches
      .filter((match: RouteObject) => Boolean(match.handle?.crumb))
      .map((match: RouteObject) => match.handle.crumb(lastParamValue));
    if (crumbs) setCrumbs(crumbs);
  }, [location, matches, params]);
  console.log(crumbs);
  return (
    <ShadBreadCrumb>
      <BreadcrumbList>
        {crumbs.map((crumb) => {
          return (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild href="/">
                  {crumb}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          );
        })}
      </BreadcrumbList>
    </ShadBreadCrumb>
  );
};

export default Breadcrumb;
