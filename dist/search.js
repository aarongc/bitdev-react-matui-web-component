import React from 'react';
import XSearch from './x-search/index.js';

class HelloMessage extends React.Component {
    render() {
        return <div>More info on google <x-search name={this.props.name}></x-search>!</div>;
    }
}

export default HelloMessage;