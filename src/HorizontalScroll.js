import React, { useEffect, useState } from 'react';

const HorizontalScroll = (props) => {
    const [names, setNames] = useState([]);

    useEffect(() => {
        // Fetch data from the JSON file
        const fetchData = async () => {
            try {
                const response = await fetch('/Data.json'); // Assuming Data.json is in the public folder
                const data = await response.json();
                setNames(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap'}}>
            {names.map((nameData, index) => (
                <div key={index} style={{ ...scrollItemStyle, width: props.width, height: props.height}}>
                    <p>Name: {nameData.name}</p>
                    <p>Rating: {nameData.rating}</p>
                    <p>Alternative Name: {nameData.alternative_name}</p>
                    {(props.height <= 100)? null : <p>Object ID: {nameData.objectID}</p>}
                    {(props.height >= 400) ? <img src={nameData.image_path} alt={`Image for ${nameData.name}`} style={{ maxWidth: '100%', maxHeight: '100%' }} /> : null }
                </div>
            ))}
        </div>
    );
};

const scrollItemStyle = {
    display: 'inline-block',
    margin: '10px',
    boxShadow: '2px 2px 5px #888888',
    backgroundColor: '#f0f0f0',
    // overflow: 'hidden',
    padding: '8px',
};

export default HorizontalScroll;
