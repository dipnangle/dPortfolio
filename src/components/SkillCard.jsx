import React from "react";

const SkillCard = ({ id, title , icon }) => {
	return (
		<div className="skillCard" id={id}>
			<div className="flex justify-center">
				<img className={`skillCardImg h-10 w-10 ${title == "KVM" ? "w-full" : "w-1/2" }`} src={icon} alt="python" />
			</div>
			<p className="skillCardText">{title}</p>
		</div>
	);
};

export default SkillCard;
