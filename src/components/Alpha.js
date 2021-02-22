import Underline from './Underline';

function sortWords(words) {
    return words.sort();
}

const Alpha = (props) => {
    const words = sortWords(props.words);

    return (
        <ol>
            {words.map((word, index) => (
                <Underline word={word} index={index} key={index} />
            ))}
        </ol>
    );
};

export default Alpha;
