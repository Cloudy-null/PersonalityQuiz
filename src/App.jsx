import React from 'react';
import QuestionComponent from './Components/QuestionComponent';

function App() {

  return (
    <div class="container">
      <h1>Personality Quiz</h1>
      {!true ? <QuestionComponent /> : <h2>result example</h2>}
    </div>
  )
}

export default App
