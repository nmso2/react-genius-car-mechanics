import React, { useEffect, useState } from 'react';

const ManageServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted!')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }

    return (
        <div>
            {
                services.map(service => <div>
                    <img src={service.img} alt="" />
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                    <br /> <br />
                </div>)
            }
        </div>
    );
};

export default ManageServices;