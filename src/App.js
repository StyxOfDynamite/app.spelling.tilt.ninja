import { useState } from 'react';
import Select from 'react-select';
import Alpha from './components/Alpha';
import Boxes from './components/Boxes';
import Sentences from './components/Sentences';
import Syllables from './components/Syllables';
import SyllablesInput from './components/SyllablesInput';
import WordInput from './components/WordInput';
import WordList from './components/WordList';
import SentenceInput from './components/SentenceInput';
import AddButton from './components/AddButton';
import './App.scss';

const App = () => {
    const [word, setWord] = useState('');
    const [words, updateWords] = useState([]);
    const [mode, setMode] = useState('alphabetical');
    const [syllables, setSyllables] = useState(1);
    const [sentence, setSentence] = useState('');
    const options = [
        { value: 'alphabetical', label: 'Alphabetical' },
        { value: 'boxes', label: 'Boxes' },
        { value: 'syllables', label: 'Syllables' },
        { value: 'sentences', label: 'Sentences' }
    ];

    const onInput = (e) => {
        setWord(e.target.value);
    };

    const onAddWord = () => {
        updateWords((arr) => [
            ...arr,
            { word: word, syllables: syllables, sentence: sentence }
        ]);
        setWord('');
        setSentence('');
        setSyllables(1);
        document.getElementById('word').focus();
    };

    const onChange = (e) => {
        setMode(e.value);
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
                <div className="select-container no-print">
                    <Select onChange={onChange} options={options} />
                </div>
                <div className="print">
                    <h1>{mode}</h1>
                    {
                        {
                            alphabetical: `Arrange the words from the list in alphabetical order.`,
                            boxes: `Fill in the correct boxes with the words from the list.`,
                            syllables: `Group the words by the number of syllables they have.`,
                            sentences: `Fill in the words in the sentences below.`
                        }[mode]
                    }
                </div>
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
                        syllables: <Syllables words={words} />,
                        sentences: <Sentences words={words} />
                    }[mode]}
            </section>
        </div>
    );
};

export default App;
