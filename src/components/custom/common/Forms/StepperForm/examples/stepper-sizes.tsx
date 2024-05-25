import * as React from "react";

import {
  Step,
  type StepItem,
  Stepper,
  type StepperProps,
  useStepper,
} from "../index";
import { Button } from "@/components/ui/Button/button";
import { Label } from "@/components/ui/Label/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/RadioGroup/radio-group";

const steps = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
] satisfies StepItem[];

export default function StepperSizes() {
  const [size, setSize] = React.useState<StepperProps["size"]>("md");

  return (
    <div className="flex w-full flex-col gap-4">
      <RadioGroup
        className="mb-2 flex"
        value={size}
        onValueChange={(value) => setSize(value as StepperProps["size"])}>
        <Label
          htmlFor="sm"
          className="flex w-fit flex-col gap-3 rounded-md border bg-background px-2 py-1 hover:bg-gray-3 [&:has([data-state=checked])]:border-primary">
          <RadioGroupItem value="sm" id="sm" className="sr-only" />
          <h2 className="font-medium">sm</h2>
        </Label>
        <Label
          htmlFor="md"
          className="flex w-fit flex-col gap-3 rounded-md border bg-background px-2 py-1 hover:bg-gray-3 [&:has([data-state=checked])]:border-primary">
          <RadioGroupItem value="md" id="md" className="sr-only" />
          <h2 className="font-medium">md</h2>
        </Label>
        <Label
          htmlFor="lg"
          className="flex w-fit flex-col gap-3 rounded-md border bg-background px-2 py-1 hover:bg-gray-3 [&:has([data-state=checked])]:border-primary">
          <RadioGroupItem value="lg" id="lg" className="sr-only" />
          <h2 className="font-medium">lg</h2>
        </Label>
      </RadioGroup>
      <Stepper size={size} initialStep={0} steps={steps}>
        {steps.map((stepProps, index) => {
          return (
            <Step key={stepProps.label} {...stepProps}>
              <div className="h-40 flex items-center justify-center my-2 border bg-secondary text-primary rounded-md">
                <h1 className="text-xl">Step {index + 1}</h1>
              </div>
            </Step>
          );
        })}
        <Footer />
      </Stepper>
    </div>
  );
}

const Footer = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
  } = useStepper();
  return (
    <>
      {hasCompletedAllSteps && (
        <div className="h-40 flex items-center justify-center my-2 border bg-secondary text-primary rounded-md">
          <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
        </div>
      )}
      <div className="w-full flex justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={resetSteps}>
            Reset
          </Button>
        ) : (
          <>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              size="sm"
              variant="secondary">
              Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
            </Button>
          </>
        )}
      </div>
    </>
  );
};
