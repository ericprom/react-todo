import React from 'react';
import PropTypes from 'prop-types';
import {Button, ListGroupItem} from 'react-bootstrap';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  propTypes = {
    text: PropTypes.string,
    completed: PropTypes.bool,
    onRemoveClick: PropTypes.func,
    onToggleClick: PropTypes.func,
  };

  render() {
    return (
        <ListGroupItem
            style={{
              textDecoration: this.props.data.completed ? 'line-through' : '',
            }}>
          <span
              onClick={() => this.props.onToggleClick(this.props.id)}>
            {this.props.data.text}
            </span>
          <Button bsClass="pull-right btn-xs btn-danger"
                  onClick={() =>
                      this.props.onRemoveClick(this.props.id)}>del
          </Button>
        </ListGroupItem>
    );
  }
}


export default TodoItem;