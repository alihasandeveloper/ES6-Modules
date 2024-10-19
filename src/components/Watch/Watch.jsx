import React from 'react';

const Watch = ({watch}) => {
    // console.log(watch);
    const {name, price, img} = watch;
    return (
        <div>
            <img src={img} alt={name} width={100} height={100} />
            <h4>Name:  {name}</h4>
            <h4>price: {price} </h4>
        </div>
    );
};

export default Watch;