import React from 'react';
import ImageItem from './ImageItem.js';


export default class ImageList extends React.Component {
    render() {
        // const imageList = this.props.images.map(
        //     image => <ImageItem image={image} />
        // )
        return (
            <ul className='images'>{this.props.filteredImages.map(imageObject =>
                <ImageItem
                    key={imageObject.description}
                    imageProp={imageObject} />
            )}</ul>

        )
    }
}
