import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
function App() {
  const styles = {
                   fontSize: "40px"
                 };
  let date = new Date();
  let hour = date.getTime();
  let time;
  if(hour > 12){
      time = "Evening";
      styles.color = "blue";
  }
  else{
      time = "Morning";
      styles.color = "purple"
  }
  return (
    <div className="WebApp">
      
      <h3 style = {styles}> Good {time}! </h3>
      
    </div>
  );
}

export default App;
