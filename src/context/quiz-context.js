import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const useQuizContext = () => {
    return useContext(QuizContext);
};

export const QuizProvider = ({ children }) => {
    const questionsData = [
        {
            question: '¿Cuál es la capital de Francia?',
            options: ['Berlín', 'Madrid', 'París', 'Roma'],
            correctAnswer: 'París',
        },
        {
            question: '¿Cuál es el país más grande del mundo?',
            options: ['Estados Unidos', 'Rusia', 'China', 'Brasil'],
            correctAnswer: 'Rusia',
        },
        {
            question: '¿Cuál es la capital de Honduras?',
            options: ['San Pedro Sula', 'Tegucigalpa', 'Comayagua', 'El Progreso'],
            correctAnswer: 'Tegucigalpa',
        },
    ];
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleOptionClick = (selectedOption) => {
        const currentQuestion = questionsData[currentQuestionIndex];

        if (selectedOption === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < questionsData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizCompleted(false);
    };

    return (
        <QuizContext.Provider
            value={{
                currentQuestionIndex,
                score,
                quizCompleted,
                questionsData,
                setQuizCompleted,
                handleOptionClick,
                resetQuiz,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};
