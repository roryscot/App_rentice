import actions from '../constants';

// Sync


// Async action creators

export const fetchNotes = () => {
  return dispatch => {
    let headers = {"Constent-Type": "application/json"};
    return fetch("/api/notes/", {headers, })
      .then(res => res.json())
      .then(notes => {
        return dispatch({
          type: actions.FETCH_NOTES, 
          notes
        })
      })
  }
}

export const addNote = text => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({text, });
    return fetch("/api/notes/", {headers, method: "POST", body})
      .then(res => res.json())
      .then(note => {
        return dispatch({
          type: actions.ADD_NOTE,
          note
        })
      })
  }
}

export const updateNote = (text, index) => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({text, });
    let noteId = getState().notes[index].id;

    return fetch(`/api/notes/${noteId}/`, {headers, method: "PUT", body})
      .then(res => res.json())
      .then(note => {
        return dispatch({
          type: actions.UPDATE_NOTE,
          note,
          index
        })
      })
      .catch(err => {throw(err)})
    }
}

export const deleteNote = index => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let noteId = getState().notes[index].id;
    
    return fetch(`/api/notes/${noteId}/`, {headers, method: "DELETE"})
    .then(res=>{
      if (res.ok) {
        return dispatch({
          type: actions.DELETE_NOTE,
          index
        })
      }
    })
    .catch(err => {throw(err)})
  }
}