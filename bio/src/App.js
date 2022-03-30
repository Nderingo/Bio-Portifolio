import logo from './logo.svg';
import './App.css';

function App() {
  // Sets the page on current page
  const [currentPage, setCurrentPage] = useState('About Me');

  console.log(document.location);
  
  return (
    <div className="App">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <CurrentPage currentPage={currentPage}/>
      <Footer />
    </div>
  );
}

export default App;
