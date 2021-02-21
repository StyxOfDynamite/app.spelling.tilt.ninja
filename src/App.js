import './App.scss';
import WordInput from './components/WordInput';
import WordList from './components/WordList';
import { useState } from 'react';
import Alpha from './components/Alpha';

const App = () => {
    const [word, setWord] = useState('');
    const [words, updateWords] = useState([]);

    const onInput = (e) => {
        setWord(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        updateWords((arr) => [...arr, word]);
        setWord('');
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Alphabetical</h1>
            </header>
            <section className="no-print">
                <WordInput onInput={onInput} onSubmit={onSubmit} word={word} />
            </section>
            <section className="output">
                <WordList words={words} />
                <Alpha words={words} />
            </section>
        </div>
    );
};

export default App;
