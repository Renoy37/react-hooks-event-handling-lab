// Code Keypad Component Here

function Keypad() {
  //   function handleChange() {
  //     console.log("Entering Password!");
  //   }
  return (
    <div>
      <input
        type="password"
        onChange={() => console.log("Entering password...")}
      />
    </div>
  );
}

export default Keypad;
