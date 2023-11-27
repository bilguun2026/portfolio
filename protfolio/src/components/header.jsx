import React, { useState, useEffect } from "react";

function Header() {
    const [text, setText] = useState('Sample text for typing test.');
    const [userInput, setUserInput] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(60);
    const [wordIndex, setWordIndex] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const words = text.split(' ');
    const inputWords = userInput.split(' ');

    useEffect(() => {
        let timer;

        if (isTimerRunning && timeRemaining > 0) {
            timer = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeRemaining === 0) {
            setIsTimerRunning(false);
            // Additional logic to handle the end of the timer
            // For example, you can disable the textarea or show results
        }

        return () => clearInterval(timer);
    }, [isTimerRunning, timeRemaining]);

    function updateInput(newInput) {
        setUserInput(newInput);
        const newInputWords = newInput.split(' ');

        // Check each word against the corresponding word in the original text
        for (let i = 0; i < newInputWords.length; i++) {
            if (newInputWords[i] === words[wordIndex + i]) {
                setCorrectWords(i + 1); // Update the number of correct words
            } else {
                break; // Exit the loop if a word doesn't match
            }
        }
    }

    function startTimer() {
        setIsTimerRunning(true);
    }

    return (
        <div className="bg-zinc-900 w-full row-span-4">
            <div className="w-full h-full grid grid-cols-7 grid-rows-3">
                <div className="row-span-1 col-span-5 bg-zinc-500 row-start-2 col-start-2 flex items-center justify-center">
                    <div className="grid grid-cols-1 grid-rows-3">
                        <div className="row-span-1 row-start-1">
                            <p>{text}</p>
                        </div>
                        <div className="row-span-1 row-start-2">
                            <textarea
                                className="text-black border-none "
                                value={userInput}
                                onChange={(e) => updateInput(e.target.value)}
                                disabled={!isTimerRunning || timeRemaining === 0}
                            />
                            <div>
                                <p className="text-white">Time Remaining: {timeRemaining} seconds</p>
                            </div>
                        </div>
                        <div className="row-span-1 row-start-3 mt-6 flex ">
                            <button onClick={startTimer} disabled={isTimerRunning}>
                                Start
                            </button>
                            <p>Correct Words: {correctWords}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
