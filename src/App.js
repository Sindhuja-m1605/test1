// import {connect} from 'react-redux';
import Inc from './inc';
import './App.css';

const  App =({count}) => {
  return (
    <div>
      <center>
        count from Appjs Component : {count}<br/>
      
      <Inc/>
      </center>
    </div>
  );
}
export default App;
