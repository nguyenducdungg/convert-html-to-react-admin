import React from "react";

const TextColors = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Text Colors</h6>
                <p className="text-primary">.text-primary</p>
                <p className="text-secondary">.text-secondary</p>
                <p className="text-success">.text-success</p>
                <p className="text-danger">.text-danger</p>
                <p className="text-warning bg-dark">.text-warning</p>
                <p className="text-info bg-dark">.text-info</p>
                <p className="text-light bg-dark">.text-light</p>
                <p className="text-dark">.text-dark</p>
                <p className="text-body">.text-body</p>
                <p className="text-muted">.text-muted</p>
                <p className="text-white bg-dark">.text-white</p>
                <p className="text-black-50">.text-black-50</p>
                <p className="text-white-50 bg-dark mb-0">.text-white-50</p>
            </div>
        </>
    );
};

export default TextColors;
