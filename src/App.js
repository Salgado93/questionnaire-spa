import './App.css';
import { QuizProvider } from './context/quiz-context';
import Quiz from './components/quiz/quiz';

function App() {
  return (
    <div className="App">
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
}

export default App;
