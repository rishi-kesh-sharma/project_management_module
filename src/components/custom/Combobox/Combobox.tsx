import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/Command/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover/popover";
import { IComboboxGroup, IComboboxItem, IComboboxProps } from "@/@types";
import { CommandList } from "cmdk";

export default function Combobox({
  comboboxData: { defaultText, placeholder, emptyText, comboboxGroups },
}: {
  comboboxData: IComboboxProps;
}) {
  console.log(comboboxGroups, "combobox groups");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between">
          {/* {() => {
            
            return value
              ? comboboxGroups.find((group: IComboboxGroup) =>
                  group.comboboxItems.find(
                    (item: IComboboxItem) => item.value === value
                  )
                )?.label
              : defaultText;
          }} */}
          {defaultText}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} className="h-9" />
          <CommandEmpty>{emptyText}</CommandEmpty>

          <CommandList>
            {comboboxGroups?.map((group: IComboboxGroup) => {
              return (
                <div>
                  <CommandGroup heading={group.heading}>
                    {group.comboboxItems.map((comboboxItem: IComboboxItem) => {
                      console.log(comboboxItem);
                      return (
                        <>
                          <CommandItem
                            key={comboboxItem.value}
                            value={comboboxItem.value}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? "" : currentValue
                              );
                              setOpen(false);
                            }}>
                            {comboboxItem.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                value === comboboxItem.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        </>
                      );
                    })}
                  </CommandGroup>
                  <CommandSeparator />
                </div>
              );
            })}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
