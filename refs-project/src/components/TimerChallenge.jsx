import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";
export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();
    const [timeExpired, setTimeExpired] = useState(false);
    const [timeStarted, setTimeStarted] = useState(false);

    function handleStart(){
        timer.current = setTimeout(() => {
            setTimeExpired(true);
            dialog.current.showModal()
        }, targetTime * 1000);
        setTimeStarted(true);
    }
    function handleStop(){
        clearTimeout(timer.current)
    }
    return(
        <>
        <ResultModal ref = {dialog} targetTime={targetTime} result="lost"/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timeStarted ? handleStop : handleStart}>
                    {timeStarted ? "STOP" : "START"} Challenge
                </button>
            </p>
            <p className="">
                {timeStarted ? "Time is running..." : "Timer inactive"}
            </p>
        </section>
        </>
    )
}