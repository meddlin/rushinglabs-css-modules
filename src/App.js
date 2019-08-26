import React from 'react';
import Paragraph from './Paragraph/Paragraph';
import VerticalComponent from './VerticalComponent/VerticalComponent';
import HorizontalComponent from './HorizontalComponent/HorizontalComponent';

import './App.css';

function App() {
  const styles = {
    blueStuff: {
      color: 'blue'
    },
    redStuff: {
      color: 'red'
    }
  };

  return (
    <div className="App">
      <h2 style={styles.blueStuff}>CSS Modules</h2>
      <div>
        <p style={styles.redStuff}>some more stuff down here</p>
      </div>

      <Paragraph />
      <VerticalComponent />
      <HorizontalComponent />
    </div>
  );
}

export default App;
