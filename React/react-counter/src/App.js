import './App.css';
import Header from './UI/Header'; 
import Footer from './UI/Footer'; 
import Counter from './App/Counter'; 

function App() {
  return(
    <div style={App_Style}>
      <Header />
      <Counter />
      <Footer />
    </div>
  ); 
}

const App_Style = {
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  height: '100vh',
}
export default App; 