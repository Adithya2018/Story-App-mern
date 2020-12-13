import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component{

  state = {
    title: '',
    body: '',
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };

  getBlogPost = () => {
    axios.get('/api')
    .then((response) => {
      const data = response.data;
      this.setState({posts: data});
      console.log('Your Data has been recieved!');
    })
    .catch(() => {
      alert('Error retrieving Data!');
    })
  };

  handleChange = ({target}) => {
    const {name, value} = target;

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
      this.resetUserInputs();
      this.getBlogPost();
    })
    .catch( () => {
      console.log('Internal Server Error');
    });

  };

  resetUserInputs = () => {
    this.setState({
      title: '',
      body: ''
    });
  };

  displayBlogPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  };

  render(){
    
    console.log('State: ', this.state);

    
    // JSX
    return(
      <div className='app'>
        <h1>A place to write your Adventures</h1>
        <h3></h3>
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
              rows="50" 
              onChange={this.handleChange}
            >
              
            </textarea>
          </div>
          <button>Submit</button>
        </form>
        <div className="blog-post">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>
    );
  }
}

export default App;