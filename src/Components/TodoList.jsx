import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <ul className="list-group mt-5">
          <h1 className="text-uppercase text-center">todo list</h1>
          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
          <button
            type="submit"
            onClick={clearList}
            className="btn btn-block bg-danger mt-3 text-white"
          >
            Clear List
          </button>
        </ul>
      </div>
    );
  }
}
