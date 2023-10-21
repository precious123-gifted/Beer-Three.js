import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { Shoe } from "./components/Shoe";
import { Box } from '@react-three/drei';
import { Model } from "./components/Lemon-bath-tub";
import { BeerModel } from "./components/BeerCrown-real";
// import Box from "./components/Box";
import styled from "styled-components";

function App() {
  return (
    <Container>
    <div className="App" role="main">
      shoe
      <Canvas>
        <OrbitControls/>
<ambientLight intensity={0.5} />
<directionalLight position={[-2,5,2]} intensity={1} />
<pointLight position={[-5, 20, 10]} />

<Shoe/>
      </Canvas>

     
   

    </div>
    </Container>
  );
}

export default App;




export const Container = styled.div`
  
Canvas{
  height:100vh;
  background-color:white;
}
.App{

  
}
`;

