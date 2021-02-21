const Underline = (props) => {
    return (
        <li>
            {props.word.split('').map((letter) => (
                <p className="underline"></p>
            ))}
        </li>
    );
};

export default Underline;
