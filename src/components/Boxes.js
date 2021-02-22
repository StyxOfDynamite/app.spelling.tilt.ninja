import Box from './Box';

const Boxes = (props) => {
    return (
        <ol>
            {props.words.map((word, index) => (
                <Box word={word} index={index} key={index} />
            ))}
        </ol>
    );
};

export default Boxes;
