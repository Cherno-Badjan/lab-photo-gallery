import React from 'react'
import logo from './logo.svg';

import './App.css';
import Header from './Components/Header.js';
import images from './data.js';
import ImageItem from './Components/ImageItem.js';
import ImageList from './Components/ImageList.js';

export default class App extends React.Component {
  state = {
    title: '',
    keyword: '',
    horns: '',
  }

  handleTitleChange = (e) => {

    this.setState({
      keyword: e.target.value
    });
  }

  render() {
    const filteredImages = images.filter((image) => {

      if (!this.state.keyword) return true;

      if (image.keyword === this.state.keyword) return true;

      return false;
    });

    const imageNodes = filteredImages.map(image => <ImageItem
      key={image.title}
      image={image} />);
    return (
      <main>
        <Header />
        <form>
          Choose a creature
          <select value={this.state.title}
            onChange={this.handleTitleChange}>
            <option value=''></option>
            <option value='narwhal'>Narwhal</option>
            <option value='rhino'>Rhino</option>
            <option value='unicorn'>Unicorn</option>
            <option value='unilego'>Unilego</option>
            <option value='triceratops'>Triceratops</option>
            <option value='markhor'>Markhor</option>
            <option value='mouflon'>Mouflon</option>
            <option value='addax'>Addax</option>
            <option value='lizard'>Lizard</option>
            <option value='dragon'>Dragon</option>
            <option value='chameleon'>Chameleon</option>
          </select>
        </form>
        <ul>
          {imageNodes}
        </ul>
      </main>
    )
  }
}

