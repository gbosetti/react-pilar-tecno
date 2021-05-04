import React from 'react';

export class Countries extends React.Component {
  render() {
    return <div>
      <h3>Countries</h3>
      <ul>
        {
          this.props.countries.map(country => {
            return <li key={country}>
              {country}
              <button onClick={() => this.props.delete(country)}>Eliminar</button>
            </li>
          })
        }
      </ul>
    </div>;
  }
}
