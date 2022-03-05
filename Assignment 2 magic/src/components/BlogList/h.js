import {useRef} from 'react';
import './b.css';

function CustomTextInput(props) {
    // textInput must be declared here so the ref can refer to it
    const textInput = useRef(null);
    
    function handleClick() {
      textInput.current.focus();
    }
return(
    <header>
                <nav>
                    <div class="logo-container">
                        <span class="logo"></span>Bloggers
                    </div>
                    <div class="links-container">
                        <button  onClick="" >Section1</button>
                        <button  onClick={handleClick()}>Section2</button>
                        <button  onClick="">Section3</button>
                        <button  >Latest Posts</button>
    
                    </div>
                    <div class="search-container">
    
                        <button onClick="window.location='./test project.html';">signup</button>
                    </div>
                </nav>
            </header>
    );
}

export default CustomTextInput;