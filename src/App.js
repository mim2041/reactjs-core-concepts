import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  {name: 'Dr. Mahfuz', job: 'single'},
  {name: 'Eva Rahman', job: 'singer2'},
  {name: 'Agun', job: 'sopno'},
  {name: 'Shuvro', job: 'Pathor'},
]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel','BappaRaj', 'Kuber', 'Jashim'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }

      {
        singers.map(singer => <Person name = {singer.name}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika="Mousumi"></Person>
      <Person name={nayoks[1]} nayika="Cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}
      <h5>New Component. yehhh</h5>
      {/* <Friend movie="Singham"></Friend>
      <Friend></Friend>
      <Friend></Friend> */}
    </div>
  );
}

function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Profession: cricketer</p>
    </div>
  )
}

function Friend(props){
  console.log(props);
  return (
    <div className='container'>
      <h3>Name: Ajay Devgun</h3>
      <p>Job: maramari</p>
      <p>{props.movie}</p>
    </div>
  )
}

export default App;
