import React from 'react'
import '../styles/Small.scss'

const SmallSection = ({image,type,name}) => {
    return (
        <section className='second-section'>
            <div className="allcart">
            <div className="cart">
                    <img src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
                    <p>Unisex</p>
                    <h1>Lorem ipsum dolor hea</h1>
            </div>

            <div className="cart">
                    <img src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
                    <p>Men</p>
                    <h1> dolor sit amet zara</h1>
            </div>

            <div className="cart">
                    <img src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80" alt="" />
                    <p>Woman</p>
                    <h1>Lorem ipsum dolor snn</h1>
            </div>

            <div className="cart">
                    <img src="https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
                    <p>Unisex</p>
                    <h1>Lorem ipsum dolor sit</h1>
            </div>

            </div>
        </section>
    )
}

export default SmallSection
