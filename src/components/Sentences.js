import { shuffle } from './Shuffle';

const replaceWord = (word, sentence) => {
    let _s = '';
    word.split('').forEach(() => {
        _s += '_';
    });

    let searchMask = word;
    let regEx = new RegExp(searchMask, 'ig');
    let replaceMask = _s;

    return sentence.replace(regEx, replaceMask);
};
const Sentences = (props) => {
    const words = shuffle(props.words);
    return (
        <div>
            {words.map((word, index) => (
                <p className="sentence" key={`sentence-${index}`}>
                    {replaceWord(word.word, word.sentence)}
                </p>
            ))}
        </div>
    );
};

export default Sentences;
