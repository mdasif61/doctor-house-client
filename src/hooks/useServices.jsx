import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services,setServices]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch('http://localhost:5000/allservice')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);

    return [services,loading]
};

export default useServices;