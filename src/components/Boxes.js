import Box from './Box';

const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

const Boxes = (props) => {
    const words = shuffle(props.words);
    return (
        <ol>
            {props.words.map((word, index) => (
                <Box word={word.word} index={index} key={index} />
            ))}
        </ol>
    );
};

export default Boxes;
