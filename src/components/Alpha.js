import Underline from './Underline';

function sortWords(words) {
    return words.sort();
}

const Alpha = (props) => {
    const words = sortWords(props.words);

    return (
        <ol>
            {words.map((word) => (
                <Underline word={word} />
            ))}
        </ol>
    );
};

export default Alpha;
