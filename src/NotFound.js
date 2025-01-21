import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">Oops! Page Not Found</h2>
            <p className="not-found-text">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="not-found-link">
                Back to the Homepage
            </Link>
        </div>
    );
}
 
export default NotFound;