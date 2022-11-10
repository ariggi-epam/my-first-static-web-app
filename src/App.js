import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      var text  = await (await fetch(`/api/message`)).json();
      console.log(text)
      setData(text.message);
      
    })();
  });

  return <div>hola {data}</div>;
}

export default App;