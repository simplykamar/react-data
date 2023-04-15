import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import {Canvas} from '@react-three/fiber';
import {OrbitControls,Sphere,MeshDistortMaterial} from '@react-three/drei';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;

`
const Container = styled.div`
	display:flex;
	justify-content:space-around;
`

const Left = styled.div`
/*	flex:2;*/
	display:flex;
	flex-direction:column;
	justify-content:center;
`
const Right = styled.div`
/*	flex:6;*/
/*	position:relative;*/
	
`
const Img = styled.img`
	width:500px;
	height:400px;
	object-fit:contain;
	animation: animate 2s infinite ease alternate;
	@keyframes animate{
		to{
			transform: translateY(20px);
		}
	}
`;
const Title = styled.h1`
	font-size:4rem
`;
const WhatWeDo = styled.p`
	color:#e9637b;
	font-weight:500
`;
const Desc = styled.p``;
const Button = styled.button`
	width:150px;
`;
const Name = styled.h2``;
const Hero = () => {
	return(
		<Section>
		<Navbar/>
			<Container>
				<Left>
					<Title>Think. Make. Solve.</Title>
					<WhatWeDo>--What We Do</WhatWeDo>
					<Desc>We enjoy creating delightful,human-centere digital experiences.</Desc>
					<Button>Learn more</Button>
				</Left>
				
				<Right>
				<Canvas >
				<OrbitControls enableZoom={false} autoRotate/>
				<ambientLight intensity={1}/>
				<directionalLight position={[3,2,1]}/>
				<Sphere args={[1,200,300]} scale={2}>
				<MeshDistortMaterial color="darkviolet" attach="material" distort={0.5} speed={2} />
				
				</Sphere>
				</Canvas>
				{/* <Img src="../img/moon3.png"/> */}
				</Right>

			</Container>
		</Section>
		);
}

export default Hero;
