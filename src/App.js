import './App.scss';
import WordInput from './components/WordInput';
import WordList from './components/WordList';
import { useState } from 'react';
import Boxes from './components/Boxes';
import Alpha from './components/Alpha';

const App = () => {
    const [word, setWord] = useState('');
    const [words, updateWords] = useState([]);
    const [mode, setMode] = useState('alphabetical');

    const onInput = (e) => {
        setWord(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        updateWords((arr) => [...arr, word]);
        setWord('');
    };

    const onChange = (e) => {
        setMode(e.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <select onChange={onChange} className="no-print">
                    <option value="alphabetical">Alphabetical</option>
                    <option value="boxes">Boxes</option>
                </select>
                <h1>{mode}</h1>
            </header>
            <section className="no-print">
                <WordInput onInput={onInput} onSubmit={onSubmit} word={word} />
            </section>
            <section className="output">
                <WordList words={words} />
                {
                    {
                        alphabetical: <Alpha words={words} />,
                        boxes: <Boxes words={words} />
                    }[mode]
                }
            </section>
        </div>
    );
};

export default App;
