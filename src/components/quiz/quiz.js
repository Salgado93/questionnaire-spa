import React from 'react';
import './quiz.css'
import { useQuizContext } from '../../context/quiz-context';
import Summary from '../summary/summary';



function Quiz() {
    const {
        currentQuestionIndex,
        quizCompleted,
        questionsData,
        handleOptionClick,
        setQuizCompleted,
    } = useQuizContext();

    const currentQuestion = questionsData[currentQuestionIndex];

    const handleContinueClick = () => {
        if (currentQuestionIndex < questionsData.length - 1) {
            handleOptionClick('', questionsData);
        } else {
            setQuizCompleted(true)
        }
    };

    return (
        <div className="quiz-container">
            {!quizCompleted && currentQuestion ? (
                <>
                    <h2>{currentQuestion.question}</h2>
                    <div className='answers-container'>
                        {currentQuestion.options.map((option, index) => (
                            <button key={index} className='answer-button' onClick={() => handleOptionClick(option, questionsData)}>
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className='continue-button' >
                        <button onClick={handleContinueClick}>Siguiente</button>
                    </div>
                </>
            ) : <Summary />}
        </div>
    );
}

export default Quiz;
