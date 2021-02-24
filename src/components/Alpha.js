import Underline from './Underline';

function sortWords(words) {
    words = words.sort((a, b) => {
        if (a.word < b.word) {
            return -1;
        }
        if (a.word > b.word) {
            return 1;
        }
        return 0;
    });

    return words;
}

const Alpha = (props) => {
    const words = sortWords(props.words);
    return (
        <ol>
            {words.map((word, index) => (
                <Underline
                    mode="alpha"
                    word={word.word}
                    index={index}
                    key={`alpha-${index}`}
                />
            ))}
        </ol>
    );
};

export default Alpha;
