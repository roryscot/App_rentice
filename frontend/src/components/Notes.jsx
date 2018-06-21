import React, { Component } from 'react';
import {connect} from 'react-redux';
import {notes} from "../actions";


class Notes extends Component {
    state = {
        text: "",
        updateNoteId: null,
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    validateNote = note => {
        return alert("Validate data not implemented!")
    }

    resetState = () => {
        this.setState({text: "", updateNoteId: null});
    }

    selectForEdit = (id) => {
        let note = this.props.notes[id];
        this.setState({text: note.text, updateNoteId: id});
    }

    confirmDelete = (id) => {
        if (window.confirm("are you sure you want to delete this note?")) {
            this.props.deleteNote(id)
        }
        return;
    }

    submitNote = (e) => {
        e.preventDefault();
        this.validateNote(); 
        console.log(this.state)
        if (this.state.updateNoteId === null) {
            this.props.addNote(this.state.text);
        } else {
            console.log("state", this.state)
            this.props.updateNote(this.state.updateNoteId, this.state.text);
        }        
        this.resetState();
    }

      
  render() {
    return (
      <div>
        <hr />

        <h3>Notes</h3>
            <h3>Add new note</h3>
                <form onSubmit={this.submitNote}>
                    <input
                        name={"text"}
                        value={this.state.text}
                        placeholder="Enter note here..."
                        onChange={this.onChange}
                        required />
                    <input type="submit" value="Save Note" />
                    <button onClick={this.resetForm}>Reset</button>
                </form>
        <table>
          <tbody>
            {
                this.props.notes.map((note,id) => (
                    <tr key={`note_${id}`}>
                        <td><button onClick={() => this.confirmDelete(id)} >delete</button></td>
                        <td>{note.text}</td>
                        <td><button onClick={() => this.selectForEdit(id)}>edit</button></td>
                        
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
          dispatch(notes.updateNote(id, text));
        },
        deleteNote: (id) => {
          dispatch(notes.deleteNote(id));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Notes);