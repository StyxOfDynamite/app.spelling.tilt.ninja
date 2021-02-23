import './App.scss';
import WordInput from './components/WordInput';
import WordList from './components/WordList';
import { useState } from 'react';
import Boxes from './components/Boxes';
import Alpha from './components/Alpha';
import SyllablesInput from './components/SyllablesInput';
import SentenceInput from './components/SentenceInput';
import Syllables from './components/Syllables';
import AddButton from './components/AddButton';

const App = () => {
    const [word, setWord] = useState('');
    const [words, updateWords] = useState([]);
    const [mode, setMode] = useState('alphabetical');
    const [syllables, setSyllables] = useState(1);
    const [sentence, setSentence] = useState('');

    const onInput = (e) => {
        e.preventDefault();
        setWord(e.target.value);
    };

    const onAddWord = () => {
        updateWords((arr) => [...arr, { word: word, syllables: syllables }]);
        setWord('');
    };

    const onChange = (e) => {
        setMode(e.target.value);
    };

    const syllablesInput = (e) => {
        setSyllables(parseInt(e.target.value));
    };

    const sentenceInput = (e) => {
        setSentence(e.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <select onChange={onChange} className="no-print">
                    <option value="alphabetical">Alphabetical</option>
                    <option value="boxes">Boxes</option>
                    <option value="syllables">Syllables</option>
                </select>
                <h1>{mode}</h1>
            </header>
            <section className="no-print">
                <div className="input">
                    <WordInput onInput={onInput} word={word} />
                    <SyllablesInput
                        onInput={syllablesInput}
                        value={syllables}
                    />
                    <SentenceInput onInput={sentenceInput} value={sentence} />
                </div>
                <AddButton onClick={onAddWord} />
            </section>
            <section className="output">
                {words.length > 0 && <WordList words={words} />}
                {words.length > 0 &&
                    {
                        alphabetical: <Alpha words={words} />,
                        boxes: <Boxes words={words} />,
                        syllables: <Syllables words={words} />
                    }[mode]}
            </section>
        </div>
    );
};

export default App;
