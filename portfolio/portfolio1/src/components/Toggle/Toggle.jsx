import React from 'react';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import {useSelector,useDispatch} from 'react-redux';
import './Toggle.css'
import {themeAction} from '../../redux/action';

const Toggle = () => {
	const dispatch = useDispatch();
	const darkmode = useSelector((state)=>state);
	const themeHandler = () => {
		dispatch((themeAction(darkmode)))
	}
	return(
		<div className="toggle-container" onClick={themeHandler}>
			<WbSunnyOutlinedIcon fontSize='small'/>
			<DarkModeOutlinedIcon fontSize='small'/>
			<div className="toggle-btn"
				style={darkmode ? {right:'2px'}:{left:'2px'}}
				>
			</div>
		</div>
		);
}
export default Toggle