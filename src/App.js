import { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import Heading from "./Heading";

const App = () => {

  const [color, setColor] = useState('blue')


  const updateColor = color => {
    setColor(color)
  }

  
  return (
    <div className="App">
      <article>
        <Heading text='Tytuł pierwszy' textColor={color} />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, a
          ab unde eos nisi doloribus ipsa perferendis ex ad amet dolor. Corrupti
          enim dicta eligendi eum. Vero architecto molestiae quasi ipsam ut,
          dolor a, deserunt sequi debitis alias reprehenderit vitae! Ipsa
          officiis, quas veniam quaerat rerum asperiores vero. Modi, quis!
        </p>
      </article>
      <article>
        <Heading text='Tytuł 2' textColor={color} />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, a
          ab unde eos nisi doloribus ipsa perferendis ex ad amet dolor. Corrupti
          enim dicta eligendi eum. Vero architecto molestiae quasi ipsam ut,
          dolor a, deserunt sequi debitis alias reprehenderit vitae! Ipsa
          officiis, quas veniam quaerat rerum asperiores vero. Modi, quis!
        </p>
      </article>

      <Buttons updateColor={updateColor} />
      
    </div>

  );
};

export default App;
