import React from 'react';
import './App.css';
import ProfileComponent from './Profile/ProfileComponent';
import imageProfile from './Profile/myPhoto.png';

const handleName=name=> alert(name);
function App() {
  return (
    <div className="App">
  <ProfileComponent fullName="Mohamed Taher Ben Arbia" bio=" J'ai travaillé comme professeur depuis 8 ans ; Professeur de Mathématiques au lycée privé de Bougarnine." profession="Professeur de Mathématiques" handleName={handleName}>
  <img src={imageProfile} alt="maths" />
  </ProfileComponent>
    </div>
  );
}

export default App;
