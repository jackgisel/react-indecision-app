class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      title: 'Visibility Toggle',
      view: false
    }
  }
  handleToggle() {
    this.setState((prevState) => {
      return({
        view: !prevState.view
      })
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggle}>{this.state.view ? "Hide Details" : "Show Details"}</button>
        {/* <p hidden={!this.state.view}>Hey. This message was hidden, but you found me.</p> */}
        {this.state.view && (
          <div>
            <p>Hey. This was hidden. No more hidden.</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));
