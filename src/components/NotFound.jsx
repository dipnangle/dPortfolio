import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="not-found">
			<div className="text-center max-w-md">
				<h1 className="four-zero-four">
					404
				</h1>
				<h2 className="page-not-found">
					Page not found
				</h2>
				<p className="page-not-found-content">
					Sorry, the page you’re looking for doesn’t exist or has been moved.
				</p>
				<Link to="/" className="blue-button">
					Go to Homepage
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
