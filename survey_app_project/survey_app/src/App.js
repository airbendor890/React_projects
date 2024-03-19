import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BasicInfo from './Components/BasicInfo'; 
import AdditionalQuestions from './Components/AdditionalQuestions'; 
import EnteredDetails from './Components/EnterDetails'; 
import ThankYouPage from './Components/ThankYouPage'; 
import About from './Components/About'; 

function App() {
    // Initialize basicData state from localStorage or an empty object 
    const initBasicData = JSON.parse(localStorage.getItem('data')) || {}; 
    // Initialize questionData state from localStorage or an empty object 
    const initQuestionsData = JSON.parse(localStorage.getItem('questiondata')) || {}; 
    
    // Set up state hooks for basicData and questionData 
    const [basicData, setBasicData] = useState(initBasicData); 
    const [questionData, setQuestionData] = useState(initQuestionsData); 
    
    // Update localStorage whenever basicData changes 
    useEffect(() => { 
      localStorage.setItem('data', JSON.stringify(basicData)); 
    }, [basicData]); 
    
    // Update localStorage whenever questionData changes 
    useEffect(() => { 
      localStorage.setItem('questiondata', JSON.stringify(questionData)); 
    }, [questionData]); 
    
    // Function to add basicData to state and localStorage 
    const addBasicData = (name, email, contact) => { 
      // Create an object with the provided basic data 
      const myBasicData = { 
        name: name, 
        email: email, 
        contact: contact 
      }; 
    
      // Update the basicData state with the new data 
      setBasicData(myBasicData); 
    
      // Update the localStorage with the new basicData 
      localStorage.setItem("data", JSON.stringify(myBasicData)); 
    } 
    
    // Function to add questionData to state and localStorage 
    const addQuestionData = (profession, interest, reference) => { 
      // Create an object with the provided question data 
      const myQuestionData = { 
        profession: profession, 
        interest: interest, 
        reference: reference 
      }; 
    
      // Update the questionData state with the new data 
      setQuestionData(myQuestionData); 
    
      // Update the localStorage with the new questionData 
      localStorage.setItem("questiondata", JSON.stringify(myQuestionData)); 
    } 
  
  // render application
  return ( 
    // Define routes
  <Router>
    <Routes>
      {/* Baisc info component */}
      <Route path='/' element={<BasicInfo addBasicData={addBasicData}></BasicInfo>} />
      <Route path='/questions' element={<AdditionalQuestions addQuestionData={addQuestionData}></AdditionalQuestions>}></Route>
      <Route path='/details' element={<EnteredDetails data={basicData} questiondData={questionData}></EnteredDetails>}></Route>
      <Route path='/thanks' element={<ThankYouPage></ThankYouPage>}></Route>
      <Route path='/about' element={<About></About>}></Route>
    </Routes>
  </Router>);
}

export default App;
