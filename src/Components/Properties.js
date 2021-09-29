import React from 'react';
import Bproperty from '../Bproperty';
import pimage1 from "../images/p1.png";
import pimage2 from "../images/p2.png";
import pimage3 from "../images/p3.png";

const Properties = () => {
    return (
        <div className="product">
            <div class="p-heading">
                <h3>Properties</h3>
                <p className="details"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>

            <div className="product-container">
                <Bproperty image={pimage1} name="Product 1" price="$240000" />
                <Bproperty image={pimage2} name="Product 1" price="$140000" />
                <Bproperty image={pimage3} name="Product 1" price="$340000" />

            </div>
        </div>
    )
}

export default Properties
