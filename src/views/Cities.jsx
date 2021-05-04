import React from 'react';

export class Cities extends React.Component {

  render() {
    return <div>
      <h4>Cities</h4>
      <p>{ JSON.stringify(this.props.cities) }</p>
      <p>{ JSON.stringify(this.props.countries) }</p>
    </div>
  }
}
