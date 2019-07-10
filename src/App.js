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
    }
  }

  onInputChange = e => {
    console.log(e.target.value)
  }
  
  onBtnSubmit = () => {
    console.log('click');
    app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", "https://samples.clarifai.com/metro-north.jpg")
    .then(
    function(response) {
      console.log(response);
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

        <ColorDetection />

      </div>
      
    )
  }
}
  

export default App;
