import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <li
                className="HornedAnimal">
                <p>{this.props.images.url}</p>
                <p>{this.props.images.title}</p>
                <p>{this.props.images.description}</p>
                <p>{this.props.images.keyword}</p>
                <p>${this.props.images.horns}</p>
            </li>
        )
    }
}
