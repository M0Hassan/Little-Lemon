import React from 'react'
import GreekSalad from '../images/greek_salad.jpg'
import LemonDessert from '../images/lemon_dessert.jpg'
import Brschetta from '../images/brschetta.PNG'
import delivery from '../images/delivery.png'

const Highlights = () => {
    return (
        <section className='highlights'>
            <header className='highlights--header'>
                <h1>This week's specials!</h1>
                <button>Online Menu</button>
            </header>
            <section className='highlights--section'>
                <article className='highlights--article'>
                    <img src={GreekSalad} alt="greek salad" />
                    <header>
                        <h4>Greek Salad</h4>
                        <p>$15.50</p>
                    </header>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutones.</p>
                    <p className='hiighlights--article-delivery'><b>Order a delivery</b></p><span className='delivery-icon'><img src={delivery} alt="delivery" /></span>
                </article>
                <article className='highlights--article'>
                    <img src={Brschetta} alt="bruschete" />
                    <header>
                        <h4>Bruschete</h4>
                        <p>$21.25</p>
                    </header>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil</p>
                    <p className='hiighlights--article-delivery'><b>Order a delivery</b></p><span className='delivery-icon'><img src={delivery} alt="delivery" /></span>
                </article>
                <article className='highlights--article'>
                    <img src={LemonDessert} alt="greek salad" />
                    <header>
                        <h4>Lemon Dessert</h4>
                        <p>$12.00</p>
                    </header>
                    <p>This comes straight from grandma's recipe book every last ingredient has been sourced and is as authentic as can be imagined</p>
                    <p className='hiighlights--article-delivery'><b>Order a delivery</b></p><span className='delivery-icon'><img src={delivery} alt="delivery" /></span>
                </article>
            </section>
        </section>
    )
}

export default Highlights;