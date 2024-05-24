"use client";

import * as React from "react";

import {
  CommandDialog as ShadCommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/Command//command";
import { ICommandGroup, ICommandItem, ICommandProps } from "@/@types";

export default function CommandDialog({
  commandData: { shortcut, placeholder, emptyText, commandGroups },
}: {
  commandData: ICommandProps;
}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          {shortcut}
        </kbd>
      </p> */}
      <ShadCommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={placeholder} />
        <CommandList>
          <CommandEmpty>{emptyText}</CommandEmpty>
          {commandGroups.map((group: ICommandGroup) => {
            return (
              <div>
                <CommandGroup heading={group.heading}>
                  {group.commandItems.map((commandItem: ICommandItem) => {
                    return (
                      <CommandItem id={"index"} className="cursor-pointer">
                        {commandItem.icon && commandItem.icon}
                        <span>{commandItem.text && commandItem.text}</span>
                        <CommandShortcut>
                          {commandItem.shortcut && commandItem.shortcut}
                        </CommandShortcut>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
                <CommandSeparator />
              </div>
            );
          })}
        </CommandList>
      </ShadCommandDialog>
    </>
  );
}
