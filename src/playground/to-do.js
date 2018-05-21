class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Header />
      <AddOption />
      <Options />
    );
  }
};

const Header = (props) => {
  return (
    <div>
      <h1>{this.props.title}</h1>
    </div>
  );
};
