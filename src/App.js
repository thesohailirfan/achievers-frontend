import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import MainPages from './components/mainpages/Pages'


function App() {
  return (
    <DataProvider>
      <Router>
        <>
          <div className="App">
            <MainPages />
          </div>
          {/* <h1 id="responsive--heading">View from desktop for a better experience <span role="img" aria-label="Sparkle">✨</span></h1> */}
        </>
      </Router>
    </DataProvider>
  );
}

export default App;
