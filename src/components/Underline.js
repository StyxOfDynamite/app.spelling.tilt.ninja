const Underline = (props) => {
    return (
        <li key={props.index}>
            {props.word.split('').map((letter, index) => (
                <p key={index} className="underline">
                    {props.className}
                </p>
            ))}
        </li>
    );
};

export default Underline;
