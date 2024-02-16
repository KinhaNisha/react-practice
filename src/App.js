import React from "react";
import Sac, {val} from "./Sachin";
import HorizontalScroll from "./HorizontalScroll";
import Slider from "./Slider";
import Greet from "./Greeting";

const App = () => {
    return (
        <>
            <Greet />
            <div>
                <h1 style={{color: 'darkViolet', fontSize: '70px', marginLeft: '200px'}}>Nisha Kinha : React.js Developer</h1>
            </div>
            <h3 style={{color: 'blue', fontSize: '30px'}}>{val}</h3>
            <Sac />
            <h1><Sac /></h1>
            <Slider />
            <HorizontalScroll width={250} height={400}/> 
        </>
    );
};

export default App;
