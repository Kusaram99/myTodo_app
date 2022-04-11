import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, SEARCH_EVENT } from "../constunts"

export const addNote = (data) => {
    // console.log("action addNote function : ", data);
  return ({
      type: ADD_NOTE,
      data:data
  })
}

export const deleteNote = (data) => {
    // console.log("deleteNote: ", data);
  return ({
      type: DELETE_NOTE,
      data:data
  })
}

export const searchEvent = (data) => {
    // console.log("SEARCH_EVENT: ", data);
  return ({
      type: SEARCH_EVENT,
      search:data
  })
}
export const editNote = (data) => {
    // console.log("action Edit: ", data);
  return ({
      type: EDIT_NOTE,
      data:data
  })
}
