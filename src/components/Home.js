import React, { useEffect, useState } from 'react';

const Home = (props) => {
    // console.log("HOme: ", Array.isArray(props.data.stateData));
    // error state
    const [showError, setShowError] = useState(
        {
            title: "",
            textarea: "",
            displayTitle: "none",
            displayText: "none"
        }
    );
    // input value state
    const [inputValue, setInputValue] = useState(
        {
            title: "",
            textarea: ""
        }
    );
    // submit notes
    const onchangeHandler = (e) => {
        let name = e.target.name;
        setInputValue({ ...inputValue, [name]: e.target.value })
    }
    const submitForm = (e) => {
        e.preventDefault();
        // Show error
        if (inputValue.title.trim().length < 3) {
            setShowError({
                displayTitle: "inline-block",
                title: "Please add your title name minimum 3 characters",
                textarea: "",
                displayText: "none"
            });
        } else if (inputValue.textarea.trim().length < 5) {
            setShowError({
                displayText: "inline-block",
                title: "",
                textarea: "Please write at least 5 characters",
                displayTitle: "none"
            });
        } else {
            setShowError({
                displayText: "none",
                title: "",
                textarea: "",
                displayTitle: "none"
            });
            if (props.data.editValue) {
                // edit input value 
                let localNotes = localStorage.getItem('myTodo');
                let updateNote = JSON.parse(localNotes);
                for (let i = 0; i < updateNote.length; i++) {
                    if (i === props.data.editValue.indexNum) {
                        updateNote.splice(i, 1, inputValue);
                    }
                }
                // console.log("localNotes: ", updateNote)
                setInputValue({ title: "", textarea: "" });
                props.addNotes(updateNote);
            } else {
                // console.log("edit are undefined -----------")
                props.addNotes(inputValue);
                setInputValue({ title: "", textarea: "" });
            }
        }
    }
    useEffect(() => {
        // Edit Note value
        if (props.data.editValue) {
            let title = props.data.editValue.title;
            let textarea = props.data.editValue.textarea;
            setInputValue({ title: title, textarea: textarea });
            // inputValue.title.select()
            let titless = document.querySelector("#title");
            titless.focus();
            titless.select();
        }
    }, [props.data.editValue]);

    //show menu bar as click in middle divice
    const [menuShow, setMenuShow] = useState('');
    const menuFun = () => {
        setMenuShow(true)
    }
    const closMenu = ()=>{
        setMenuShow(false);
    }

    // slie search input as click
    const [addWidth, setAddWith] = useState(false);
    const slideInput = ()=>{
        !addWidth?setAddWith(true):setAddWith(false);
    }

    return (
        <div>
            <nav className='nav-container'>
                <div className='nav-bar'>
                    <h3>myTodo</h3>
                    <div className='menu'>
                        <i 
                        id={
                            `${menuShow ? "disBlock" : ""}`
                        }
                        className='bi bi-arrow-bar-up closeBtn' 
                        onClick={closMenu}></i>
                        <i
                            id={
                                `${!menuShow ? "disBlock" : ""}`
                            }
                            className="bi bi-layers menuBtn"
                            onClick={() => menuFun()}></i>
                        <ul
                            id={
                                `${menuShow ? "disBlock" : ""}`
                            }
                        >
                            <li>Home</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div
                    className='nav-search'>
                    <input
                        id={`${addWidth?"addWidth":""}`}
                        type='text'
                        onChange={(e) => props.searchData(e.target.value)} />
                    <button onClick={slideInput}>
                        <i className="bi bi-search-heart"></i>
                    </button>
                </div>
            </nav>

            {/* Notes area */}

            <div className="notes-container">
                <form onSubmit={(e) => submitForm(e)}>
                    <div className="mb-3">
                        <label
                            htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            name='title'
                            value={inputValue.title}
                            className="form-control"
                            id="title"
                            placeholder="Add title......."
                            // required
                            onChange={(e) =>
                                onchangeHandler(e)}
                        />
                        <p
                            style={{ display: showError.displayTitle }}
                            className='error'>
                            {showError.title}
                        </p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="textarea">Notes</label>
                        <textarea
                            className="form-control"
                            name='textarea'
                            value={inputValue.textarea}
                            id="textarea"
                            rows="3"
                            placeholder='Write notes.......'
                            onChange={(e) => onchangeHandler(e)}>
                        </textarea>
                        <small
                            style={{ display: showError.displayText }}
                            className='error'>
                            {showError.textarea}
                        </small>
                    </div>
                    <button
                        className='btn-dark btn'>
                        Submit Note
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Home