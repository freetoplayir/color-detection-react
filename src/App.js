import React from 'react';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ColorDetection from './components/ColorDetection/ColorDetection';
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({apiKey: '2530bf918c3f4845bd742edae500013f'});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: ''
    }
  }

  onInputChange = e => {
    this.setState({input: e.target.value});
  }
  
  onBtnSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    app.models.predict(
      Clarifai.COLOR_MODEL,
      this.state.input)
    .then(
    function(response) {
      console.log(response.outputs[0].data.colors);
    },
    function(err) {
      // there was an error
    }
  );
  }

  render() {
    return (
      <div className = "App">
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onBtnSubmit={this.onBtnSubmit} />

        <ColorDetection imgUrl={this.state.imgUrl} />

      </div>
      
    )
  }
}
  

export default App;
