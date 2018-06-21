const initialState = [
    {text: "Write code!"}
];


export default function handleNotes(state=initialState, action) {
    let noteList = state.slice();
    console.log('notelist',state)
    console.log(action)

  switch (action.type) {

    case 'ADD_NOTE':
      return [...state, {text: action.text}];

    case 'UPDATE_NOTE':
      let noteToUpdate = noteList[action.id]
      noteToUpdate.text = action.text;
      noteList.splice(action.id, 1, noteToUpdate);
      return noteList;

    case 'DELETE_NOTE':
      noteList.splice(action.id, 1);
      return noteList;

    default:
      return state;
  }
}