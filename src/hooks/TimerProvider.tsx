import { createContext, useMemo } from 'react'
import { useStopwatch } from 'react-timer-hook';
export interface ItimerContextValueProps {
    hasTaskStarted: boolean | string | null;
    end: () => void;
    start: () => void;
    pause: () => void;
    reset: () => void;
    totalSeconds: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    isRunning: boolean
}
export const TimerContext = createContext<ItimerContextValueProps | null>(null)
const TimerProvider = ({ children }: { children: React.ReactNode }) => {
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
        // restart,
    } = useStopwatch({
        autoStart: false,
    });
    // const location = useLocation();

    let hasTaskStarted = localStorage.getItem("has-task-started");
    if (hasTaskStarted) {
        hasTaskStarted = JSON.parse(hasTaskStarted);
    }

    const end = () => {
        localStorage.removeItem("has-task-started");
        reset();
    };

    // useEffect(() => {
    //     addEventListener("beforeunload", () => {
    //         localStorage.setItem("timer-value", JSON.stringify(totalSeconds));
    //     });

    // const timerValue = localStorage.getItem("timer-value");
    // const hasTimerStarted = localStorage.getItem("has-task-started");
    // if (timerValue && hasTimerStarted) {
    //   reset(Date.now() + JSON.parse(timerValue), true);
    //   const time = new Date();
    //   time.setSeconds(time.getSeconds() + JSON.parse(timerValue));
    //   restart(time);
    // }
    // console.log(Date.now());
    // }, [location]);

    const timerContextValue = useMemo(() => {
        return {
            hasTaskStarted,
            end,
            start,
            pause,
            seconds,
            minutes,
            hours,
            days,
            isRunning,
            totalSeconds,
            reset
        }
    }, [
        hasTaskStarted,
        end,
        start,
        pause,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        totalSeconds,
        reset
    ])
    return (
        <TimerContext.Provider value={timerContextValue}>
            {children}
        </TimerContext.Provider>
    )
}

export default TimerProvider