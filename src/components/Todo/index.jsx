import React from 'react';
import PropTypes form 'prop-types';

class Todo extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }

    render() {
        const { onClick, completed, text } = this.props;
        return (
            <li
                onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                {text}
            </li>
        )
    }
}

Todo.propTypes = {
}

export default Todo