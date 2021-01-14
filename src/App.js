
import React from 'react';
import LaunchPrograms from './containers/LaunchPrograms';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        SpaceX Launch Programs
      </header>

      <LaunchPrograms></LaunchPrograms>
    </div>
  );
}

export default App;
