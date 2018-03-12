



const showStudent = (ssn) => Maybe.fromNullable(ssn)
    .map(cleanInput)
    .chain(checkLengthSsn)
    .chain(findStudent)
    .map(R.props(['ssn', 'firstname', 'lastname']))
    .map(csv)
    .map(append('#student-info'));

showStudent('444-44-4444').orElse(errorLog);



const map = R.curry((f, container) => container.map(f));

const chain = R.curry((f, container) => container.chain(f));
