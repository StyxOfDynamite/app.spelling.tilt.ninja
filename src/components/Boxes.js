import Box from './Box';

const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
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
                <Box word={word} index={index} key={index} />
            ))}
        </ol>
    );
};

export default Boxes;
