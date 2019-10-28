import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {    
    constructor(props){
        super(props);
    }

    render(){
        const file_extension = "static/UMMA_Images/" + this.props.filename;
        return (
        <div className="image-parent row"> 
            <img className="image-source col-6" src={file_extension} />
            <div className="image-detail col-6">
                <p className="title"> {this.props.title} </p>
                <p className="artist"> {this.props.artist} </p>
                <p className="year"> {this.props.year} </p>
                <p className="analysis"> {this.props.analysis} </p>
            </div>
        </div>
        );
    }
}

Image.PropTypes = {
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    analysis: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
}

export default Image;
