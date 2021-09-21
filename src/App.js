import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Countries></Countries>
     <Footer></Footer>
    </div>
  );
}


// creating component
// function Countries() {
//   // declaring state
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.eu/rest/v2/all')
//       .then(res => res.json())
//       .then(data => setCountries(data));
//   }, [])
//   return (
//     <div>
//       <h2>Traveling around the world!!</h2>
//       <h2>Countries Available: {countries.length}</h2>
//       {
//         countries.map(country => <Country name={country.name} capital ={country.capital}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h3>Capital: {props.capital}</h3>
//     </div>
//   )
// }


export default App;
