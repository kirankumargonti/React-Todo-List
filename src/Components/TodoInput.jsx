import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body bg-warning">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text text-white bg-danger">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-center text-capitalize"
              placeholder="add a Todo Item"
              value={item}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className={editItem ? "btn btn-block bg-success text-capitalize mt-3" : "btn btn-block bg-dark text-capitalize mt-3 text-white"}>
            {editItem ? "Edit & Submit" : "Add Item"}
          </button>
        </form>
      </div>
    );
  }
}
