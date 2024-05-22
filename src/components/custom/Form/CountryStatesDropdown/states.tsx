"use client";

import { Button } from "@/components/ui/Button/button";
import { ScrollArea, ScrollBar } from "@/components/ui/ScrollArea/scroll-area";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/Command/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover/popover";

import { cn, lowerCase, sentenceCase } from "@/lib/utils";
import states from "@/data/states.json";
import { useDropdownStore } from "@/hooks/useCountryStateDropdown";

import { type StateProps } from "@/@types";
import { LuChevronsUpDown } from "react-icons/lu";
import { Check } from "lucide-react";

const StateDropdown = () => {
  const {
    countryValue,
    stateValue,
    openStateDropdown,
    setOpenStateDropdown,
    setStateValue,
  } = useDropdownStore();

  const SD = states as StateProps[];
  const S = SD.filter(
    (state) => state.country_name === sentenceCase(countryValue)
  );

  return (
    <Popover open={openStateDropdown} onOpenChange={setOpenStateDropdown}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={openStateDropdown}
          className="w-[300px] cursor-pointer justify-between  border disabled:!cursor-not-allowed disabled:!opacity-50"
          disabled={!countryValue || S.length === 0}>
          {stateValue ? (
            <div className="flex items-end gap-2">
              <span>
                {S.find((state) => lowerCase(state.name) === stateValue)?.name}
              </span>
            </div>
          ) : (
            <span>Select State...</span>
          )}
          <LuChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" rounded-[6px] border  p-0">
        <Command>
          <CommandInput placeholder="Search state..." />
          <CommandEmpty>No state found.</CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-[300px] w-full">
              {S.map((state) => (
                <CommandItem
                  key={state.id}
                  value={state.name}
                  onSelect={(currentValue) => {
                    setStateValue(
                      currentValue === lowerCase(state.name) ? currentValue : ""
                    );
                    setOpenStateDropdown(false);
                  }}
                  className="flex cursor-pointer items-center justify-between text-xs ">
                  <div className="flex items-end gap-2">
                    <span className="">{state.name}</span>
                  </div>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      stateValue === lowerCase(state.name)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default StateDropdown;
