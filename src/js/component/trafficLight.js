import React, { useState } from "react";

//create your first component
export const TrafficLight = e => {
	let [active, setActive] = useState("");

	let colorSelect = e => {
		setActive(e.target.className);
		/* setChange((change = "lightEffect"));
		e.target.id = change; */
	};

	return (
		<div className="bigBox">
			<div className="cable"></div>
			<div className="trafficLightBox">
				<div
					onClick={colorSelect}
					className={
						"redCircle" +
						(active === "redCircle" ? "LightEffect" : "")
					}></div>
				<div
					onClick={colorSelect}
					className={
						"yellowCircle" +
						(active === "yellowCircle" ? "LightEffect" : "")
					}></div>
				<div
					onClick={colorSelect}
					className={
						"greenCircle" +
						(active === "greenCircle" ? "LightEffect" : "")
					}></div>
			</div>
		</div>
	);
};
