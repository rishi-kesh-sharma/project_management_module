import { z } from "zod";
import { Button } from "@/components/ui/Button/button";
import { PlusIcon } from "@/components/custom/common/icons/commonIcons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form/form";
import TextInput from "@/components/custom/common/FormElements/Input/TextInput/TextInput";
import { useForm } from "react-hook-form";
import Modal from "@/components/custom/common/Modal/Modal";
import { DialogFooter } from "@/components/plate-ui/dialog";
import { DialogClose } from "@/components/ui/Dialog/dialog";
import { useAddWorkspaceMutation } from "@/api/workspace";
import { ReloadIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSuccessToast } from "@/utils/constants/toast";

const CreateWorkspaceForm = () => {
  const [createWorkspace, { data, isLoading, error, isSuccess }] =
    useAddWorkspaceMutation();

  const formSchema = z.object({
    workspaceName: z.string().min(2).max(50),
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createWorkspace(values);
      getSuccessToast("WorkSpace Created");
    } catch (err) {
      console.log(err);
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workspaceName: "",
    },
  });
  return (
    <div>
      <Modal
        trigger={
          <Button type="button" className="flex gap-1 ml-auto" size={"sm"}>
            {/* <Link
            to={"/workspace/create"}
            className="flex gap-2 items-center justify-end">
            {i18n.t(`component.button.create`)}
          </Link> */}
            <PlusIcon />
            {` Workspace`}
          </Button>
        }
        title={`Create workspace`}
        // description={`This form creates a new workspace`}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-[2rem] flex-col">
            <FormField
              control={form.control}
              name="workspaceName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <TextInput
                      placeholder="Eg. Workspace 1"
                      {...field}
                      id="workspaceName"
                      name="workspaceName"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-[0.5rem] justify-end">
              <DialogFooter className="sm:justify-start">
                <Button type="submit">Submit</Button>
                <DialogClose asChild>
                  {isLoading ? (
                    <Button>
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />,
                      "Please wait",
                    </Button>
                  ) : (
                    <Button variant="outline">Cancel</Button>
                  )}
                </DialogClose>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateWorkspaceForm;
