import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return (
        <div className="border py-2 px-4 rounded flex my-2">
            <div className="w-1/4 mr-10">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="w-3/4">           
                <p className="mb-6">{product.title}</p>
                <div className="font-bold mb-4">${product.price}</div>
                <button 
                    className={btnClasses.join(' ')}
                    onClick={() => setDetails( prev => !details)}>
                    { details ? "Hide Details" : "Show Details"}
                </button>
                {details && <div className="mt-4">
                    <p>{ product.description }</p>
                    <p className="mt-4">Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
                </div>}
                {/* <p>{product.description}</p> */}
            </div>
        </div>
    )
}