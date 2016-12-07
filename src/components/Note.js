import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = { edit: false };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.edit = this.edit.bind(this);
    this.display = this.display.bind(this);

  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  display() {
    let note = this.props.note;

    return(
      <div className="col s12 m4">
        <div className="card" style={{ backgroundColor: note.color }}>
          <div className="card-content white-text">
            <span className="card-title">{ note.title }</span>
            <p>{ note.body }</p>
            <i> { note.author } </i>
          </div>
          <div className="card-action">
            <a href="#">Edit</a>
            <a href="#">Delete</a>
          </div>
        </div>
      </div>
    );
  }

  edit() {

  }

  render() {
    if(this.state.edit) {
      return(this.edit());
    }else{
      return(this.display());
    }
  }
}

export default Note;
