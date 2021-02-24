const SentenceInput = (props) => (
    <>
        <label htmlFor="sentence">Sentence</label>
        <input onInput={props.onInput} id="sentence" />
    </>
);

export default SentenceInput;
