import React, { Component } from 'react';
import {connect} from 'react-redux';


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

const mapDispatchToProps = dispatch => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Notes);