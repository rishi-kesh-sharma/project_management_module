import { TabsContent, TabsList, TabsTrigger, Tabs as ShadTabs } from "@/components/ui/Tabs/tabs";

interface ITabTrigger { id: string, label: string }
interface ITabContent { id: string, element: React.JSX.Element }
type TTabsProps = {
    triggers: ITabTrigger[]
    contents: ITabContent[]
}

const Tabs = ({ triggers, contents }: TTabsProps) => {
    return (
        <ShadTabs defaultValue={triggers[0].id} className="w-[400px]">
            <TabsList>
                {triggers.map((trigger: ITabTrigger) => {
                    return <TabsTrigger value={trigger.id} id={trigger.id}>{trigger.label}</TabsTrigger>
                })}
            </TabsList>
            {contents.map((content: ITabContent, index: number) => {


                return <TabsContent className="bg-red-200 border" value={content.id} id={content.id}>{content.element}
                </TabsContent>
            })}
        </ShadTabs>
    )
}

export default Tabs
