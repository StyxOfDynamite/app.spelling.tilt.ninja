const replaceWord = (word, sentence) => {
    let _s = '';
    word.split('').forEach((letter) => {
        _s += '_';
    });
    console.log(sentence.replace(word, _s));
    return '';
};
const Sentences = (props) => {
    console.log(props);
    return (
        <div>
            {props.words.map((word, index) => (
                <p key={`sentence-${index}`}>
                    {replaceWord(word.word, word.sentence)}
                </p>
            ))}
        </div>
    );
};

export default Sentences;
