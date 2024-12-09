import React from "react";
import LightMode from "../functions/LightMode";
import { CiBellOn } from "react-icons/ci";
import {
	LiaAngleDownSolid,
	LiaKeySolid,
	LiaSignOutAltSolid,
	LiaUserCircle,
} from "react-icons/lia";
import { Link } from "react-router-dom";

const DbHeader = ({
	adminTitle = "Python(flask[Local Net Only]) User Management System",
}) => {
	const [showInfo, setShowInfo] = React.useState(false);
	const handleShowInfo = () => {
		setShowInfo(!showInfo);
	};
	return (
		<>
			<header className='border-b-4 border-accent py-1 w-full z-[99]'>
				<div className='container '>
					<div className='flex items-center gap-5 justify-between relative'>
						<h4 className='text-content mb-0 font-FiraCode '>{adminTitle}</h4>
					</div>
				</div>
			</header>
		</>
	);
};

export default DbHeader;
