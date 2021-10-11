const WordList = (props) => {
    function removeWord(word) {
        props.removeWord(word);
    }

    return (
        <ul className="word-list">
            {props.words.map((word, index) => (
                <li key={index} className="word">
                    {word.word}
                    <button onClick={() => removeWord(word)}>X</button>
                </li>
            ))}
        </ul>
    );
};

export default WordList;
