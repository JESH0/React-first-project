import { useState } from 'react';

function App() {
  const [counter, editCounter] = useState(0);

  const addValue = () => {
    console.log('clicked button', counter);
    editCounter(prevCounter => prevCounter + 1);
    editCounter(prevCounter => prevCounter + 1);
    editCounter(prevCounter => prevCounter + 1);
  };

  const remValue = () => {
    if (counter > 0) {
      editCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Hello hooks</h1>
      <h2>count : {counter}</h2>

      <button onClick={addValue}>add num</button>
      <br />
      <button onClick={remValue}>remove num</button>
    </>
  );
}

export default App;
