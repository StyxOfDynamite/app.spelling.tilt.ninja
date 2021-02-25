const Word = (props) => {
    const letters = props.word.split('');
    return (
        <li>
            {letters.map((letter, index) => (
                <span key={`word-letter-${index}`}>___</span>
            ))}
        </li>
    );
};

export default Word;
