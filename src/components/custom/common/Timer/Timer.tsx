/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/Button/button";
import { TimerContext } from "@/hooks/TimerProvider";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router";

function MyStopwatch() {

  const values = useContext(TimerContext)

  const location = useLocation();



  const handleEndTask = () => {
    console.log("clicked")
    localStorage.removeItem("has-task-started");
    values?.reset();
  };

  useEffect(() => {
    addEventListener("beforeunload", () => {
      localStorage.setItem("timer-value", JSON.stringify(values?.totalSeconds));
    });

    // const timerValue = localStorage.getItem("timer-value");
    // const hasTimerStarted = localStorage.getItem("has-task-started");
    // if (timerValue && hasTimerStarted) {
    //   reset(Date.now() + JSON.parse(timerValue), true);
    //   const time = new Date();
    //   time.setSeconds(time.getSeconds() + JSON.parse(timerValue));
    //   restart(time);
    // }
    // console.log(Date.now());
  }, [location]);
  return (
    <div className="flex justify-end flex-wrap items-center gap-[1rem] mt-[2rem]">
      {/* {hasTaskStarted && (
        <h1 className="text-2xl font-semibold text-primary">Timer</h1>
      )} */}
      {values?.hasTaskStarted && (
        <div className="text-3xl font-semibold">
          <span>{values?.days}</span>:<span>{values?.hours}</span>:<span>{values?.minutes}</span>:
          <span>{values?.seconds}</span>
        </div>
      )}
      {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
      <div className="flex gap-[0.2rem] items-center justify-center ">
        {!values?.hasTaskStarted ? (
          <Button
            onClick={() => {
              console.log("clicked")
              localStorage.setItem("has-task-started", JSON.stringify(true));
              values?.start();
              console.log("hello")
            }}
          >
            Start Task
          </Button>
        ) : (
          <div className="flex gap-3 items-center">
            {values?.isRunning ? (
              <Button variant={"secondary"} onClick={values?.pause}>
                Pause
              </Button>
            ) : (
              <Button variant={"secondary"} onClick={values?.start}>
                Resume
              </Button>
            )}
            <Button variant={"default"} onClick={handleEndTask}>
              End Task
            </Button>
          </div>
        )}

        {/* <Button variant={"outline"} onClick={reset}>
          Reset
        </Button> */}
      </div>
    </div>
  );
}

export default function Timer() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}