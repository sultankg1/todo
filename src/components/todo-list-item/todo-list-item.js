import React, { Component} from 'react';


import './todo-list-item.css';
export default class TodoListItem extends Component{

    state = {
        done: false,
        important: false
    };
    constructor(){
        super();
    };
        onLabelClick = () => {
          this.setState(({done}) => {
            return{
                done: !done
            };
          });
        };
    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            };
        });
    };

    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

        let className = 'todo-list-item';
        if (done) {
            className += 'done';
        }
    }
}
        if (important){
            className += 'important';
        }
    return (
     <span className="todo-list-item">
      <span 
      className='todo-list-item-lable'
          onClick={ this.onLabelClick }>
            { label }
    </span>

<button type="button"
        className="btn btn-outline-success btn-sm fa float-right"
        onClick={this.onMarkImportant}>
    <i className="fa fa-exclamation"/>
</button>

<button type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}>
            <i className="fa fa-trash-o" />
</button>    
</span>
);


