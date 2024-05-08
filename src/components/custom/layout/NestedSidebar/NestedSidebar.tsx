import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/Button/button";
import config from "./../../../../config/index";
import { LeftAngularArrowIcon } from "@/components/icons";
import { SidebarItemProps, SidebarProps } from "./../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import React from "react";

const NestedSidebar: React.FC<SidebarProps> = ({ items, path, type }) => {
  //   Active Menu Css
  // const getActiveCss = (link: string) =>
  //   path === link ? `font-medium text-sm ` : "font-medium text-sm";
  return type === "large" ? (
    <aside className="flex w-full flex-col gap-6 md:gap-10 bg-primary text-white py-[2rem] ">
      <Link to={`/`} className="flex items-center space-x-2">
        <div className="logo flex items-center justify-between text-2xl gap-3 px-5 ">
          <img src={config.LOGO} alt="enterleaf" className=" object-contain" />
          <LeftAngularArrowIcon />
        </div>
      </Link>
      {items?.length ? (
        <nav className="flex flex-col  w-full ">
          {items?.map((item: SidebarItemProps, index: number) =>
            item.items ? (
              <Accordion type="single" className="" collapsible>
                <AccordionItem
                  className="flex flex-col gap-0 w-full h-full"
                  value={item.label}>
                  <AccordionTrigger
                    className={cn(
                      buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      }),
                      "justify-between",
                      "border-b-1 border-white flex py-6  w-full rounded-none gap-0 no-underline hover:no-underline  "
                    )}>
                    <div className="flex items-center justify-start w-full gap-1 ">
                      {item.icon && item.icon}
                      {item.label}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-primary py-0 ">
                    <div className="flex flex-col ">
                      {item.items.map(
                        (child: SidebarItemProps, index: number) => (
                          <Link
                            key={index}
                            to={child.link || "/"}
                            className={cn(
                              buttonVariants({
                                size: "sm",

                                variant: "ghost",
                              }),
                              "justify-start",
                              "no-underline ",
                              "hover:no-underline",
                              "active::no-underline",
                              "flex",
                              "gap-2",
                              "border-b-2 rounded-none  border-white  last-of-type:border-none p-6"
                              //   child.disabled && "cursor-not-allowed opacity-80"
                            )}>
                            {item.icon}
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              item.link && (
                <Link
                  key={index}
                  to={item.link}
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    }),
                    "justify-start",
                    "no-underline ",
                    "hover:no-underline",
                    "flex",
                    "gap-1",
                    "rounded-none",
                    "py-6",
                    "border-b-2"
                  )}>
                  {item.icon && item.icon}
                  {item.label}
                </Link>
              )
            )
          )}
        </nav>
      ) : null}
    </aside>
  ) : (
    <aside className="flex w-full flex-col gap-6 md:gap-10 bg-primary text-white py-[2rem] max-w-[70px] ">
      <Link to={`/`} className="flex items-center space-x-2">
        <div className="logo flex items-center justify-between text-2xl gap-3 px-5 ">
          {/* <img src={config.LOGO} alt="enterleaf" className=" object-contain" /> */}
          <LeftAngularArrowIcon />
        </div>
      </Link>
      {items?.length ? (
        <nav className="flex flex-col  w-full ">
          {items?.map((item: SidebarItemProps, index: number) =>
            item.items ? (
              <Accordion type="single" className="" collapsible>
                <AccordionItem
                  className="flex flex-col gap-0 w-full h-full"
                  value={item.label}>
                  <AccordionTrigger
                    className={cn(
                      buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      }),
                      "justify-between",
                      "border-b-1 border-white flex py-6  w-full rounded-none gap-0 no-underline hover:no-underline  "
                    )}>
                    <div className="flex items-center justify-start w-full gap-1 ">
                      {item.icon && item.icon}
                      {/* {item.label} */}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-primary py-0 ">
                    <div className="flex flex-col ">
                      {item.items.map(
                        (child: SidebarItemProps, index: number) => (
                          <Link
                            key={index}
                            to={child.link || "/"}
                            className={cn(
                              buttonVariants({
                                size: "sm",

                                variant: "ghost",
                              }),
                              "justify-start",
                              "no-underline ",
                              "hover:no-underline",
                              "active::no-underline",
                              "flex",
                              "gap-2",
                              "border-b-2 rounded-none  border-white  last-of-type:border-none p-6"
                              //   child.disabled && "cursor-not-allowed opacity-80"
                            )}>
                            {item.icon}
                            {/* {item.label} */}
                          </Link>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              item.link && (
                <Link
                  key={index}
                  to={item.link}
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    }),
                    "justify-start",
                    "no-underline ",
                    "hover:no-underline",
                    "flex",
                    "gap-1",
                    "rounded-none",
                    "py-6",
                    "border-b-2"
                  )}>
                  {item.icon && item.icon}
                  {/* {item.label} */}
                </Link>
              )
            )
          )}
        </nav>
      ) : null}
    </aside>
  );
};

export default NestedSidebar;
