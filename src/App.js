import './App.css';
import React from 'react';

//transform the App.js into a class-based component
class App extends React.Component {
  //the App Component constructor
  constructor(props) {
    super(props)
    //the App state {Person and show}
    this.state = {
      Person: {
        fullName: "Sekrafi",
        bio: "123",
        imgSrc: "https://static.vecteezy.com/system/resources/previews/002/002/403/large_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        profession: "Full Stak JS Dev"
      },
      show: true,
      count: 0
    };
  }

  toggleState = () => {
    this.setState({
      // togle the show state between true and false
      show: !this.state.show
    });
  }

  componentDidMount() {
    // w use setInterval to calculate the time interval when component is mounting
    this.timerID = setInterval(() => {
      this.setState({
        count: this.count + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    // w clear the timerID when component is Unmounting
    clearInterval(this.timerID);
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleState}>Click me</button> {/* toggleState is a props function */}
          <div>Time interval: <span className="interval">{this.timerID ? this.timerID : "--"}</span></div>
          {
            this.state.show ?
              /* if show state is true (Person profile appear)*/
              <div>
                <img src={this.state.Person.imgSrc} className="App-logo" alt="logo" />
                <div>
                  Full Name: <span>{this.state.Person.fullName}</span>
                </div>
                <div>
                  Bio: <span>{this.state.Person.bio}</span>
                </div>
                <div>
                  Profession: <span>{this.state.Person.profession}</span>
                </div>
              </div>
              :
              <div>
                {/* if show state is false */}
              </div>
          }
        </header>
      </div>
    );
  }
}

export default App;
