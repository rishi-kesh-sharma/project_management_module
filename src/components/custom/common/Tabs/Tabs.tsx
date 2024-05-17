import { ITabContent, ITabTrigger, TTabsProps } from "@/@types";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
  Tabs as ShadTabs,
} from "@/components/ui/Tabs/tabs";

const Tabs = ({ triggers, contents }: TTabsProps) => {
  return (
    <ShadTabs defaultValue={triggers[0].id} className="w-[400px]">
      <TabsList>
        {triggers.map((trigger: ITabTrigger) => {
          return (
            <TabsTrigger value={trigger.id} id={trigger.id}>
              {trigger.label}
            </TabsTrigger>
          );
        })}
        c
      </TabsList>
      {contents.map((content: ITabContent) => {
        return (
          <TabsContent
            className="bg-red-200 border"
            value={content.id}
            id={content.id}>
            {content.element}
          </TabsContent>
        );
      })}
    </ShadTabs>
  );
};

export default Tabs;
