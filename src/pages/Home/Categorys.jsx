import React from 'react';
import Buttons from '../../components/Buttons';

const Categorys = ({category}) => {
    const {service_name,category_name,short_description,tags,price,img}=category
    return (
        <div className='w-1/2 border flex flex-col justify-between p-5 rounded-lg'>
           <img className='rounded-lg' src={img} alt="not found" />
           <div>
           <h1 className='text-xl font-bold my-3'>{service_name}</h1>
           <p className='text-gray-600'>{short_description}</p>
           </div>
           <Buttons bg={'btn btn-outline btn-success'}>Details</Buttons>
        </div>
    );
};

export default Categorys;