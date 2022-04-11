import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, SEARCH_EVENT } from "../constunts"

const initialState = {
    stateData: []
}

export const reducer = (state = initialState, action) => {
    // console.log('reducer:', action);
    let localArr = localStorage.getItem('myTodo');
    if (localArr) {
        localArr = JSON.parse(localArr);
    }
    else {
        localArr = [];
    }
    switch (action.type) {
        case ADD_NOTE:
            // Add notes
            if(Array.isArray(action.data)){
                // console.log("addNote reducer components: ",Array.isArray(action.data))
                localStorage.setItem('myTodo', JSON.stringify(action.data));
                state.stateData = action.data
                return {...state, editValue:undefined}
            }else{
                state.stateData.unshift(action.data);
                localStorage.setItem('myTodo', JSON.stringify(state.stateData));
                return { ...state };
            }

        case DELETE_NOTE:
            //Delete notes
            let filterArr = state.stateData.filter((elem, ind) => ind !== action.data);
            // console.log("delete reducer: ", filterArr)
            localStorage.setItem('myTodo', JSON.stringify(filterArr)); 
            state.stateData = filterArr;
            return { ...state }

        case SEARCH_EVENT:
            // Search notes
            return { ...state, searchInput: action.search }

        case EDIT_NOTE:
            // Edit notes
            return{...state, editValue:action.data.editValue}
        default:
            state.stateData = localArr;
            return { ...state }
    }
}
