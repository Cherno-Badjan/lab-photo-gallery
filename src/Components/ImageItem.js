import React from 'react'

export default class ImageItem extends React.Component {
    render() {
        return (
            <li className="AnimalsList"><img alt="animal" src={this.props.image.url} />
                <p>Title:{this.props.image.title}</p>
                <p>Description:{this.props.image.description}
                </p><p>Keyword:{this.props.image.keyword}</p>
                <p>Number of Horns:{this.props.image.horns}</p>
            </li>
        )
    }
}
