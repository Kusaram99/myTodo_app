
const Card = (props) => {
    // console.log("card: ", props.data);
    // search note
    let regExp;
    if (props.data.searchInput !== undefined) {
        let removEmptyArr = props.data.searchInput
            .split(' ').filter((elem) => elem !== "");
        //remove , 
        let searchData = removEmptyArr
            .join().replaceAll(',', ' ');
        //regular Expression
        searchData.match(/[a-z]/) ||
            searchData.match(/[A-Z]/) ||
            searchData.match(/[0-9]/) ?
            regExp = RegExp(searchData, "i") : regExp = "";
    } else {
        regExp = "";
    }

    //  notes
    const editNote = (elemInd) => {
        //get edit value
        let editValue;
        let stateData = props.data.stateData;
        for (let i = 0; i < stateData.length; i++) {
            if (i === elemInd) {
                editValue = {
                    title: stateData[i].title,
                    textarea: stateData[i].textarea,
                    indexNum: i,
                }
            }
        }
        props.editNotes({ editValue: editValue });
    }

    return (
        <div className='card-container'>
            {
                props.data.stateData.length === 0 ?
                    <h4>Add your notes</h4> :
                    props.data.stateData.map((elem, index) => (
                            <div
                                className="card card-margin"
                                style={{
                                    display: elem.title.match(regExp) ? "block" : "none"
                                }}
                                key={index}>
                                <div className="card-body">
                                    <h5
                                        className="card-title">
                                        {`${index + 1})`} {elem.title}
                                    </h5>
                                    <p
                                        className="card-text">
                                        {elem.textarea}
                                    </p>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => props.deleteNote(index)}>
                                        Delete
                                    </button>
                                    <button
                                        style={{ marginLeft: "10px" }}
                                        className='btn btn-dark'
                                        onClick={() => editNote(index)}>
                                        Edit
                                    </button>
                                </div>
                            </div>)
                    )
            }

        </div>
    )
}

export default Card