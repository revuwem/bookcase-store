import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator-overlay">
            <div className="error-indicator">
                <h3>Oops!</h3>
                <p>Something went wrong.</p>
            </div>
        </div>
    );
}

export default ErrorIndicator;