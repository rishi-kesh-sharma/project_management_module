import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/Command/command";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon } from "@radix-ui/react-icons";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

interface FormValues {
  type: string;
  items: {
    category: {
      title: string;
      id: string;
    };
    id: string;
    name: string;
    quantity: number;
  }[];
  volunteer: string;
  location: string;
  event: string;
}
const ArrayField = () => {
  const formSchema = z.object({
    items: z.array(
      z.object({
        id: z.string(),
        text: z.string(),
      })
    ),
  });

  const {
    fields: itemFields,
    append,
    remove,
  } = useFieldArray({
    control: form.control,
    name: "items", // The key of the field array
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      items: [],
      description: "",
    },
  });
  return (
    <FormField
      control={form.control}
      name={`items.${index}`}
      render={({ field }) => (
        <FormItem className="flex w-full flex-col">
          <FormLabel>Category</FormLabel>
          {field.name}
          <Popover
            open={openPopover === `${field.name}`}
            onOpenChange={() => handleOpenChange(`${field.name}`)}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    !field.value && "text-muted-foreground"
                  )}>
                  {field.value
                    ? languages.find(
                        (language) => language.id === field.value.id
                      )?.title
                    : "Select language"}
                  <TbCaretUpDownFilled className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput
                  placeholder="Search framework..."
                  className="h-9"
                />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {languages.map((language) => (
                    <CommandItem
                      value={language.title}
                      key={language.id}
                      onSelect={() => {
                        // form.setValue(
                        //   `items.${index}.name`,
                        //   language.title,
                        // );
                        form.setValue(`items.${index}`, {
                          name: language.title,
                          id: language.id,
                          // ...field.value,
                        });
                        setOpenPopover(false);
                      }}>
                      {language.title}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          language.id === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ArrayField;
