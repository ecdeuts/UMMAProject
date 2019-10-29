import React from 'react';
import PropTypes from 'prop-types';
import Image from './image';
class Item extends React.Component {    
    constructor(props){
        super(props);
        this.state = {
            image_display: false
        };
        this.highlight = this.highlight.bind(this);
        this.removeHighlight = this.removeHighlight.bind(this);
    }

    highlight() {
        const button = document.getElementById(`button-icon-${this.props.object_name}`);
        console.log(`button-icon-${this.props.object_name}`);
        if(button !== null){
            button.classList.add("highlight");
        }
    }

    removeHighlight() {
        const button = document.getElementById(`button-icon-${this.props.object_name}`);
        if(button !== null){
            button.classList.remove(" highlight");
        }
    }

    render() {

        return (
        <div className = {"item " + this.props.object_name}> 
             { /*Modal starter code 
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#" + this.props.object_name + "Modal"}>
            </button> */ }

            <img id={`button-icon-${this.props.object_name}`} className="button-icon" src={"static/items/"+this.props.object_name+".png"} 
            data-toggle="modal" data-target={"#" + this.props.object_name + "Modal"}
            onMouseEnter={this.highlight()} onMouseLeave={this.removeHighlight()}/>


            <div className="modal fade bd-example-modal-lg" id={this.props.object_name + "Modal"} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id={`${this.props.object_name}-label`} >{this.props.object_name} Detail</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <Image title= {this.props.title} artist={this.props.artist} year={this.props.year} 
                    filename={this.props.filename} analysis={this.props.analysis}/>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

Item.PropTypes  = {
    object_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    filename: PropTypes.string.isRequired,
    analysis: PropTypes.string.isRequired,
}

export default Item;