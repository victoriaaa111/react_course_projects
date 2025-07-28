import {forwardRef} from "react";

const ResultModal =  forwardRef(
    function ResultModal({result, targetTime}, ref) {
        return (
            <dialog ref={ref} className="result-modal">
                <h2>You {result}</h2>
                <p>The target time was <strong>{targetTime} seconds left.</strong></p>
                <p>You stopped the timer at <strong>X seconds left.</strong></p>
                <form method="dialog">
                    <button>Close</button>
                </form>
            </dialog>
        )
    }
)
export default ResultModal;