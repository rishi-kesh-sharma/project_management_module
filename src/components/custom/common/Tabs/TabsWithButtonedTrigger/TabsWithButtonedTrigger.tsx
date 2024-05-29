import { ITabContent, ITabTrigger, TTabsProps } from "@/@types";
import { Button } from "@/components/ui/Button/button";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
  Tabs as ShadTabs,
} from "@/components/ui/Tabs/tabs";
import { cn } from "@/lib/utils";

const TabWithButtonedTrigger = ({
  triggers,
  contents,
  className,
  ...props
}: TTabsProps) => {
  return (
    <ShadTabs
      defaultValue={triggers[0].id}
      {...props}
      className={`${(cn(className), "mt-0")}`}>
      <TabsList className=" h-auto  flex justify-start  border-b   shadow-none items-start bg-background gap-[1rem]  rounded-none  pb-[1rem] ">
        {triggers.map((trigger: ITabTrigger) => {
          return (
            <div className="flex items-center gap-1 ">
              <TabsTrigger
                className="bg-background  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground "
                asChild
                value={trigger.id}
                id={trigger.id}>
                <Button
                  variant={"outline"}
                  className="bg-inherit flex gap-2 items-center">
                  {trigger.icon}
                  {trigger.label}
                </Button>
              </TabsTrigger>
            </div>
          );
        })}
      </TabsList>
      {contents.map((content: ITabContent) => {
        return (
          <TabsContent className="" value={content.id} id={content.id}>
            {content.element}
          </TabsContent>
        );
      })}
    </ShadTabs>
  );
};

export default TabWithButtonedTrigger;
