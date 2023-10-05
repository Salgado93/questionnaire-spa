import React from 'react';
import './summary.css'
import { useQuizContext } from '../../context/quiz-context';

const Summary = () => {
    const { score, questionsData, resetQuiz } = useQuizContext();

    return (
        <div className="quiz-summary">
            <h2>Cuestionario Completado!</h2>
            <p>Tu puntaje: {score} de {questionsData.length}</p>
            <h3>Respuestas Correctas:</h3>
            {questionsData.map((question, index) => (
                <div className='quiz-summary-question' key={index}>
                    <strong>Pregunta {index + 1}: </strong>
                    {question.question}
                    <br />
                    Respuesta Correcta: {question.correctAnswer}
                </div>
            ))}
            <div className='summary-button'>
                <button onClick={resetQuiz}>Reiniciar Cuestionario</button>
            </div>
        </div>
    );
};

export default Summary;
