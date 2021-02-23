import Underline from './Underline';
import { useEffect } from 'react';

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
                <Underline word={word.word} index={index} key={index} />
            ))}
        </ol>
    );
};

export default Alpha;
