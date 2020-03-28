import React from 'react';

class DropDownList extends React.Component {
    handleChange(event) {
        event.preventDefault();
        this.props.onChange(event.target.value);
    }

    render(){
        const phones = this.props.phones.map((phone, index) => {
            return (
                <option key={index} value={phone.number}>{phone.number}</option>
            );
        });
        return (
            <select id="phoneDropDownList" onChange={e => this.handleChange(e)} style={{marginTop: '10px'}}>{phones}</select>
        );
    }
};

export default DropDownList;
