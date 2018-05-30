import React from 'react';

const ResultsPage = ({ searchItems }) => (
    <div>Results
        <ol>
            {searchItems.map((item, idx) => <li key={idx}>{item.Name}></li>)}
        </ol>
    </div>
)

export default ResultsPage;