import Underline from './Underline';

const getSyllableGroups = (array) => {
    let syllableGroupings = [];
    array.forEach((element) => {
        syllableGroupings.push(element.syllables);
    });
    return syllableGroupings.filter(onlyUnique).sort();
};

const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
};

const Syllables = (props) => {
    const syls = getSyllableGroups(props.words);
    return (
        <div>
            {syls.map((syl, index) => (
                <div>
                    <h2 key={`header-${index}`}>{`${syl} Syllables`}</h2>
                    {props.words.map((word) => {
                        if (word.syllables === syl) {
                            return <Underline word={word.word} />;
                        }
                    })}
                </div>
            ))}
        </div>
    );
};

export default Syllables;
