import { useState, setState } from 'react';
import { ListComponent } from './ListComponent.js';

function App() {
  const [components, setComponents] = useState(['Off']);
  const [componentNames, setComponentNames] = useState([
    'Light',
    'Moderate',
    'Heavy',
  ]);
  if (componentNames.includes('Off')) {
  } else {
    componentNames.push('Off');
  }
  const nextComponent = () => {
    setComponents([componentNames[0]]);
    componentNames.push(componentNames[0]);
    componentNames.splice(0, 1);
  };

  return (
    <div className='Component' onClick={nextComponent}>
      {components.map((item, i) => (
        <ListComponent text={item} key={i} />
      ))}
    </div>
  );
}

export default App;
