import React from 'react';
import './Buisness.css'

let buisness = { imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90}


class Buisness extends React.Component {
    render() {

        return (
            
                <div>
                <div className="image-container">
                <img src={buisness.imageSrc} alt=''/>
                </div>
                    <h2>{buisness.name}</h2>
                    <div className="Business-information">
                    <div className="Business-address">
                        <p>{buisness.address}</p>
                        <p>{buisness.city}</p>
                        <p>{buisness.state}{buisness.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{buisness.category}</h3>
                        <h3 className="rating">{buisness.rating} star</h3>
                        <p>{buisness.reviewCount} reviews</p> 
                    </div>
                </div>
        </div>
        )
    }
}

export default Buisness