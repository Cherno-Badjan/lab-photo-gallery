import React from 'react'
import './App.css';
import Header from './Components/Header.js';
import images from './data.js';
// import ImageItem from './Components/ImageItem.js';
import ImageList from './Components/ImageList.js';
import Dropdown from './Components/Dropdown.js';


export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '',
  }

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
    console.log(this.state)
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

    // const imageNodes = filteredImages.map(image => <ImageItem
    //   key={image.title}
    //   image={image} />);


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





/* <form>
  Choose a creature
  <select
    id={this.state.horns}
    onChange={this.handleHornsChange}>
    <option id="1" >1</option>
    <option id="2" >2</option>
    <option id="3" >3</option>
    <option id="100" >100</option></select>
  <select value={this.state.title}
    onChange={this.handleKeywordChange}>
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
} */