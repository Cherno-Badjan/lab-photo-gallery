import React from 'react';
import ImageItem from './ImageItem.js';


export default class ImageList extends React.Component {
    render() {

        return (
            <ul className='images'>{this.props.filteredImages.map(imageObject =>
                <ImageItem
                    key={imageObject.description}
                    imageProp={imageObject} />
            )}</ul>

        )
    }
}
