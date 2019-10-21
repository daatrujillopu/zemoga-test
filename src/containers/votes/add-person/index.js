import React from 'react';

// @styles
import './styles.scss';

const AddPerson = () => (
    <aside className="add-person">
        <div className="add-person__container">
            <div className="add-person__text">
                Is there anyone else you would want us to add ?
            </div>

            <button
                className="add-person__submit-name"
                type="button"
            >
                Submit a Name
            </button>
        </div>
    </aside>
);


export default AddPerson;
