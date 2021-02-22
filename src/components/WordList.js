const WordList = (props) => (
    <ul className="word-list">
        {props.words.map((word, index) => (
            <li key={index} className="word">
                {word}
            </li>
        ))}
    </ul>
);

export default WordList;
