import React from 'react';
import APISelector from './components/APISelector';
import WorkflowBuilder from './components/WorkflowBuilder';

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4">
        <h1>API Chaining Dashboard</h1>
      </header>
      <main className="p-4">
        <APISelector />
        <WorkflowBuilder />
      </main>
    </div>
  );
}

export default App;
