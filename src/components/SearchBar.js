import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    UNSAFE_componentWillReceiveProps(newProps, nextState) {
        this.setState({term: newProps.selectedPhone});
    }

    handleClick(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Phone Number Validation</label>
                        <input type="text"
                               value={this.state.term}
                               onChange={ e => this.setState({term: e.target.value}) } />
                    </div>
                    <div className="field">
                        <button onClick={e => this.handleClick(e)}>Validate</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;