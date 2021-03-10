import './App.css';
import Card from './components/Card';
import Counter from './components/Counter';
import IdForm from './components/IdForm';
function App() {
  return (
    <div className="App">
      <h1>Welcome to The Bridge</h1>
      <section>
        <h3>Let's learn how to test!</h3>
        <a data-testid="google-link" href="https://google.es">Go to The Bridge</a>
      </section>

      <Card title='My Card' price={20} alt={'logo'} src='https://thebridge.tech/blog/wp-content/uploads/2020/10/logo-the-bridge-01.png'/>
      <Counter/>
      <IdForm />
    </div>
  );
}
export default App;