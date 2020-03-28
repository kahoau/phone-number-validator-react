import React from 'react';

const PhoneList = props => {
  const phones = props.phones.map((phone,index)  => {
      return (
          <tr key={index}>
              <td>{phone.valid.toString()}</td>
              <td>{phone.number}</td>
              <td>{phone.local_format}</td>
              <td>{phone.international_format}</td>
              <td>{phone.country_prefix}</td>
              <td>{phone.country_code}</td>
              <td>{phone.country_name}</td>
              <td>{phone.location}</td>
              <td>{phone.carrier}</td>
              <td>{phone.line_type}</td>
          </tr>
      );
  });

  return phones;
};

export default PhoneList;

