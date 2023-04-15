import React from 'react';
import styled from 'styled-components';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';


const Container = styled.div`
	height:100vh;
	width:100%;
	scroll-snap-align: center;

`

const Test = () => {
	return(
			<Container>
				<Canvas>
				<OrbitControls enableZoom={false} autoRotate={true}/>
				<ambientLight intensity={1}/>
				<directionalLight position={[3,2,1]}/>
				<mesh>
					<boxGeometry arg={[5,5,5]}/>
					<meshStandardMaterial color="red"/>
				</mesh>
				</Canvas>
			</Container>
		)
}
export default Test