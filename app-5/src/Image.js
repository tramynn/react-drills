import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <div>
                <img src={this.props.myImage} />
                <caption>Kawaii Desu</caption>
            </div>
        )
    }
}

export default Image;