const WordList = (props) => (
    <ul className="word-list">
        {props.words.map((word, index) => (
            <li className="word">{word}</li>
        ))}
    </ul>
);

export default WordList;
