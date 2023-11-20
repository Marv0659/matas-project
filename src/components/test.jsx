import styles from './test.module.css'




function Test() {

    function handleClick() {
        console.log('Click happened');
      }

      function handleMouseOver() {
        console.log('Mouse over happened');
      }

  return (
    <div>
        <button onClick={handleClick}>Test</button>
    </div>
  );
  
}

export default Test
