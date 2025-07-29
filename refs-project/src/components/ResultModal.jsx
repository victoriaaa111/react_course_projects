import {forwardRef} from "react";

const ResultModal =  forwardRef(
    function ResultModal({result, targetTime, remainingTime, onReset}, ref) {
        const userLost = remainingTime <= 0;
        const formRemainingTime = (remainingTime / 1000).toFixed(2);
        return (
            <dialog ref={ref} className="result-modal">
                {userLost && <h2>You lost</h2>}
                <p>The target time was <strong>{targetTime} seconds left.</strong></p>
                <p>You stopped the timer at <strong>{formRemainingTime} seconds left.</strong></p>
                <form method="dialog" onSubmit={onReset}>
                    <button>Close</button>
                </form>
            </dialog>
        )
    }
)
export default ResultModal;