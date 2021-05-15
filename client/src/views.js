import axios from 'axios';

function Views() {
  const handleClick = () => {
    axios
      .post('/checkDBConnection')
      .then((response) => response)
      .then(() => alert('Call successful!'))
      .catch((err) => alert('Call failed!'));
  };

  return (
    <div>
      hello
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Views;
