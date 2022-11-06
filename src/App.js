import { useState } from "react";
import Colors from "./components/Colors";
import Counter from "./components/Counter";
import Form from "./components/Form";
import User from "./components/User";



function App() {

  const [isVisible, setIsVisible] = useState(true);


  return (
    <div className="test">
      {
        isVisible && <Counter/> 
      }
       <button onClick={() => setIsVisible(!isVisible)}>Göster / Gizle</button>
      {/* <Form/> */}
      {/* <Colors/>  */}
      {/* <User/> */}
    </div>
  );
}

export default App;
