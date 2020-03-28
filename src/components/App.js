import React from 'react';
import numverify from '../api/numverify';
import { properties } from '../config/properties.js';
import SearchBar from './SearchBar';
import PhoneList from './PhoneList';
import DropDownList from './DropDownList';


class App extends React.Component {
    state = { phones: [], selectedPhone: '' };

    onDropDownChange = (term) => {
        const list = [...this.state.phones];
        this.setState({ phones: list, selectedPhone: term });
    }

    onSearchSubmit = async (term) => {
        if (term.trim() === '') { return; }

        const accessKey= properties.accessKey;
        const response = await numverify.get('/api/validate?' +
                                            'access_key=' + accessKey +'&'+
                                            'number=' + term + '&'+
                                            'country_code=&format=1');

        if (response && response.data) {
            const list = !response.data.error ? [...this.state.phones, response.data] : [...this.state.phones];
            this.setState({phones: list, selectedPhone: ''});
        }
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar selectedPhone={this.state.selectedPhone} onSubmit={this.onSearchSubmit} />
                <table className="ui celled table">
                    <tbody>
                        <tr>
                            <th>Valid</th>
                            <th>Number</th>
                            <th>Local Format</th>
                            <th>International Format</th>
                            <th>Country Prefix</th>
                            <th>Country Code</th>
                            <th>Country Name</th>
                            <th>Location</th>
                            <th>Carrier</th>
                            <th>Line Type</th>
                         </tr>
                        <PhoneList phones={this.state.phones} />
                    </tbody>
                </table>

                Choose the validated phone number to validate again: <br/>
                <DropDownList onChange={this.onDropDownChange} phones={this.state.phones} />
            </div>
        );
    }
};

export default App;
