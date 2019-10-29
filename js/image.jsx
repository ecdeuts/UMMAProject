import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {    
    constructor(props){
        super(props);
    }

    render(){
        const file_extension = "static/UMMA_Images/" + this.props.filename;
        return (
        <div className="image-parent"> 
            <div className="row">
                <img className="image-source col-8" src={file_extension} />
                <div className="image-detail col-4">
                    <p className="title"> {this.props.title} </p>
                    <p className="artist"> {this.props.artist} </p>
                    <p className="year"> {this.props.year} </p>
                </div>
            </div>
            
            <p className="analysis"> {this.props.analysis} </p>
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
