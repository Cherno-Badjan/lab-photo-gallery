import React from 'react'

export default class ImageItem extends React.Component {
    render() {
        return (
            <li className="AnimalsList"><img alt="animal" src={this.props.imageProp.url} />
                <p>Title:{this.props.imageProp.title}</p>
                <p>Description:{this.props.imageProp.description}
                </p><p>Keyword:{this.props.imageProp.keyword}</p>
                <p>Number of Horns:{this.props.imageProp.horns}</p>
            </li>
        )
    }
}
