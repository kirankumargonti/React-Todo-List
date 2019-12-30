import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import uuid from 'uuid';

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      id: uuid(),
      item: '',
      editItem: false
    };
  }
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    });
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };
  render() {
    return (
      <div className="container">
        <div className="todo-container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="todo">
                <h1 className="text-center text-uppercase">Todo Input</h1>
                <TodoInput
                  item={this.state.item}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  editItem={this.state.editItem}
                />
                <TodoList
                  items={this.state.items}
                  clearList={this.clearList}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
