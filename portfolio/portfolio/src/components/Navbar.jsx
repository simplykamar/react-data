import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
	display: flex;
	justify-content:center;
`
const Container = styled.div`
	padding: 10px 10px 0 0;
	width: 1000px;
	display:flex;
	justify-content:space-between;
`

const Links = styled.div`
	display:flex;
	align-items:center;
`;
const Logo = styled.h2``;
const List = styled.ul`
	list-style:none;
	display:flex;
	gap:20px;
`;
const ListItem = styled.li`
	cursor:pointer;
`;
const Icon = styled.img``;
const Icons = styled.div``;
const Button = styled.button`
`;

const Navbar = () => {
	return(
		<Section>
			<Container>
				<Links>
					<Logo>Kamar</Logo>
					<List>
						<ListItem>Home</ListItem>
						<ListItem>Studio</ListItem>
						<ListItem>Works</ListItem>
						<ListItem>Contact</ListItem>
					</List>
				</Links>
				<Icons>
				<Button>Hire Now</Button>
				</Icons>
			</Container>

		</Section>
		);
}

export default Navbar;