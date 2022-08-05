import {useEffect, useState} from 'react';
import './App.css'
const url = 'https://jsonplaceholder.typicode.com/comments'
function App() {
  const [dataStatus, setDataStatus]  = useState('standby') 
  
  function handleResponse(res){
    if(res.ok){
      res.json();
      console.log();
      setDataStatus('loaded');
    } else setDataStatus('req-error');    
  }

  useEffect(()=>{
    setDataStatus('loading');    
    fetch(url)
    .then(res => handleResponse(res))    
    .catch(err =>setDataStatus('net-error') );
  },[])

if(dataStatus==="loading") return <div className='App-header'>Retrieving data...</div>
if(dataStatus==="loaded") return <div className='App-header'>Data retrieved OK</div>
if(dataStatus==="req-error") return <div className='App-header'>Request error. Try again...</div>
if(dataStatus==="net-error") return <div className='App-header'>Network error. Try again...</div>



}

export default App
