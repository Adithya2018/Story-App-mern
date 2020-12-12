import React from 'react';

class App extends React.Component{

  state = {
    title: '',
    body: ''
  };

  handleChange = (event) => {

  };



  render(){
    

    
    // JSX
    return(
      <div>
        <h3>Testing</h3>
        <form>
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