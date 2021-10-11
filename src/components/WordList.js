import { shuffle } from './Shuffle';

const WordList = (props) => {
    function removeWord(word) {
        props.removeWord(word);
    }

    const words = shuffle(props.words);

    return (
        <ul className="word-list">
            {words.map((word, index) => (
                <li key={index} className="word">
                    {word.word}
                    <button onClick={() => removeWord(word)}>X</button>
                </li>
            ))}
        </ul>
    );
};

export default WordList;
