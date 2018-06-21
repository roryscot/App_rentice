import React, { Component } from 'react';
import {connect} from 'react-redux';
import {notes} from "../actions";


class Notes extends Component {
  render() {
    return (
      <div>
        <hr />

        <h3>Notes</h3>
        <table>
          <tbody>
            {
                this.props.notes.map(note => (
                    <tr key={note.text}>
                        <td>{note.text}</td>
                        <td><button>edit</button></td>
                        <td><button>delete</button></td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

// Make actions available in props:

const mapDispatchToProps = dispatch => {
    return {
        addNote: (text) => {
          dispatch(notes.addNote(text));
        },
        updateNote: (id, text) => {
          dispatch(notes.addNote(id, text));
        },
        deleteNote: (id) => {
          dispatch(notes.deleteNote(id));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Notes);