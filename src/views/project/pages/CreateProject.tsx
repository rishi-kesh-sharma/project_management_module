// import SelectTextInput from "../../../helpers/components/common/forms/SelectTextInput.tsx";
import FormPageLayout from "../../../helpers/components/common/layouts/FormPageLayout.tsx";
import { Datepicker, Label, Textarea, TextInput } from "flowbite-react";
const CreateProjectPage = () => {
  return (
    <div className="flex flex-col h-full w-full px-6 py-3 gap-4 scrollbar scrollbar-mt-30px overflow-y-scroll">
      <FormPageLayout />
      <form className="grid grid-cols-2 gap-[2rem] mt-[1rem]">
        <div className="flex max-w-2xl flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="nameOfProject" value="Project's name" />
            </div>
            <TextInput
              id="nameOfProject"
              type="text"
              sizing="md"
              placeholder="Eg. Project1"
            />
          </div>
        </div>
        <div className="flex max-w-2xl flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="orgId" value="Organization's id" />
            </div>
            <TextInput
              id="orgId"
              type="text"
              sizing="md"
              placeholder="Eg. 00000"
            />
          </div>
        </div>
        <div className="flex max-w-2xl flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="projectType" value="Type of Project" />
            </div>
            <TextInput
              id="projectType"
              type="text"
              sizing="md"
              placeholder="Eg. IT"
            />
          </div>
        </div>
        <div className="flex max-w-2xl flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="dueDate" value="Due date" />
            </div>
            <Datepicker />
          </div>
        </div>
        <div className="flex max-w-2xl flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description of project" />
            </div>
            <Textarea
              rows={7}
              id="description"
              placeholder="Project description goes here..."
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProjectPage;
