import React from 'react';
import Department from '../Department/Department';

const DepartmentList = (props) => {
    return (
        <div>
            {props.departments.map(dept => <Department key={dept.Id} department={dept} />)}
        </div>
    );
}

export default DepartmentList;
