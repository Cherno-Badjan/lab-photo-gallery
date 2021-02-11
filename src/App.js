import React from 'react'
import './App.css';
import Header from './Components/Header.js';
import images from './data.js';
import ImageList from './Components/ImageList.js';
import Dropdown from './Components/Dropdown.js';


export default class App extends React.Component {
  //Setting state
  state = {
    keyword: '',
    horns: '',
  }
  // tracking state changes
  handleKeywordChange = (e) => {

    this.setState({
      keyword: e.target.value
    });
  }
  handleHornsChange = (e) => {

    this.setState({
      horns: Number(e.target.value)
    });
  }

  render() {
    // Setting conditions for filter and what to display based on user input.
    const filteredImages = images.filter((image) => {

      if (!this.state.keyword && !this.state.horns) return true;
      if (this.state.keyword && !this.state.horns) {

        if (image.keyword === this.state.keyword) return true;
      }

      if (!this.state.keyword && this.state.horns) {

        if (image.horns === this.state.horns) return true;
      }

      if (this.state.keyword && this.state.horns) {
        if (image.keyword === this.state.keyword && image.horns === this.state.horns) return true;
      }
      return false;
    });
    //Rendering the components created on the page.
    return (
      <>
        <Header />
        Creature:<Dropdown currentValue={this.state.keyword} handleChange={this.handleKeywordChange} options={['narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'lizard', 'dragon', 'chameleon']} />
        Number of Horns:<Dropdown currentValue={this.state.horns} handleChange={this.handleHornsChange} options={[1, 2, 3, 100]} />
        <ImageList filteredImages={filteredImages} />
      </>
    );
  }
}
