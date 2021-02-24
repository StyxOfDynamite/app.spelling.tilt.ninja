import Box from './Box';
import { shuffle } from './Shuffle';

const Boxes = (props) => {
    const words = shuffle(props.words);
    return (
        <ol>
            {words.map((word, index) => (
                <Box word={word.word} index={index} key={index} />
            ))}
        </ol>
    );
};

export default Boxes;
