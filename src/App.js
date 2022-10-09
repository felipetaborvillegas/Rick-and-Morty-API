import { useState } from 'react';
import { Header } from './components/Header';
import { Characters } from './components/Characters';
import { ThemeContext } from './context/ThemeContext';
import './styles/App.scss';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={[darkMode, setDarkMode]}>
      <div className={darkMode?"App dark-mode":"App light-mode"}>
        <Header/>
        <Characters/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
