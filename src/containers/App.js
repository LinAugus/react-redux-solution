// container
import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions';

import AddTodo from '../components/Todo/AddTodo';
import TodoList from '../components/Todo/TodoList';
import Footer from '../components/Todo/Footer';

import './App.css';

class App extends Component {

    static PropTypes = {
        visibleTodos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired).isRequired,

        visibilityFilter: PropTypes.oneOf([
            'SHOW_ALL',
            'SHOW_COMPLETED',
            'SHOW_ACTIVE'
        ]).isRequired
    }

    render() {
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        return (
            <div className="App">
                <header>
                    <p>TODO APP</p>
                    <div>
                        <AddTodo
                            onAddClick={text =>
                                dispatch(addTodo(text))
                            } />
                        <TodoList
                            todos={visibleTodos}
                            onTodoClick={index =>
                                dispatch(completeTodo(index))
                            } />
                        <Footer
                            filter={visibilityFilter}
                            onFilterChange={nextFilter =>
                                dispatch(setVisibilityFilter(nextFilter))
                            } />
                    </div>
                </header>
            </div>
        );
    }
}

function selectTodos(todos, filter) {
    switch (filter) {
    case VisibilityFilters.SHOW_ALL:
        return todos
    case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed)
    }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App)
