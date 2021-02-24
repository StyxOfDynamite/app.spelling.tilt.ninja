const SentenceInput = (props) => (
    <>
        <label htmlFor="sentence">Sentence</label>
        <input onInput={props.onInput} id="sentence" value={props.value} />
    </>
);

export default SentenceInput;
