import React from 'react';
import PropTypes from 'prop-types';

class Test extends React.Component {    
    constructor(props){
        super(props);
    }

    render(){
        return (<div> Test element </div>);
    }
}

Test.PropTypes = {}

export default Test;
