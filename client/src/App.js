import React from 'react';
import axios from 'axios';

class App extends React.Component{

  state = {
    title: '',
    body: ''
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });

  };

  submit = (event) => {
    event.preventDefault();
    
    const payload = {
      title: this.state.title,
      body: this.state.body
    };

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
    .then( () => {
      console.log('Data has been sent to the server!');
    })
    .catch( () => {
      console.log('Internal Server Error');
    });

  };



  render(){
    
    console.log('State: ', this.state);

    
    // JSX
    return(
      <div>
        <h3>Testing</h3>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input 
              type="text"
              name="title"
              placeholder="Title of the Story"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <textarea 
              placeholder="body" 
              value={this.state.body} 
              name="body" 
              cols="30" 
              rows="10" 
              onChange={this.handleChange}
            >
              
            </textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;