import { useState, useEffect, useRef } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { Sub } from './types';

const INITIAL_STATE = [
  {
    nick: 'Nick',
    subMonth: 3,
    avatar: 'https://i.pravatar.cc/150?u=Nick',
    description: "I'm Nick",
  },
  {
    nick: 'John',
    subMonth: 7,
    avatar: 'https://i.pravatar.cc/150?u=John',
  },

]

interface appState {
  subs: Sub[];
  newSubsNumber: number;
}
  

function App() {
  const [subs, setSubs] = useState<appState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<appState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  const handleNewSub = (newSub: Sub) => {
    setSubs(prev => ([ ...prev, newSub ]));
    // setNewSubsNumber(prev => prev + 1);
  }
  
  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App" ref={divRef}> 
      <h1>Subscribers</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
