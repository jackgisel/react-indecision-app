// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
const app = {
  title: 'Indecision App',
  subtitle: 'a producitivity app',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderPage();
  }
};
const onRemoveAll = () => {
   app.options = [];
   renderPage();
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const renderPage = () => {
  const template = (<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options:" : 'No options'}</p>
    <button disabled={app.options.length < 1} onClick={onMakeDecision}>What should I do?</button>
    <button onClick={onRemoveAll}>Remove All Options</button>
    <ol>
      {
        app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })
      }
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add option</button>
    </form>
  </div>);
  ReactDOM.render(template, appRoot);
};
renderPage();
