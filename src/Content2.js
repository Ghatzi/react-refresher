import { useState } from 'react';

const Content = () => {
  const [name, setName] = useState('George');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['George', 'Dave', 'Bob'];
    const int = Math.floor(Math.random() * 3);
    // return names[int];
    setName(names[int]);
  };

  const handleClick = name => {
    // console.log(`${name} was clicked`);
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = e => {
    console.log(e.target.innerText);
  };

  const handleClick3 = e => {
    console.log(count);
  };

  return (
    <main>
      <p>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click It</button>
      {/* <button onClick={() => handleClick('George')}>Click It</button> */}
      <button onClick={e => handleClick2(e)}>Click It</button>
      <button onClick={handleClick3}>Click It</button>
    </main>
  );
};

export default Content;
