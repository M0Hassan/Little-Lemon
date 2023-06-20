import React from 'react'
import star from '../images/star.png'
import person1 from '../images/person1.jpeg'
import person2 from '../images/person2.jpeg'
import person3 from '../images/person3.jpg'
import person4 from '../images/person4.jpg'
import GreekSalad from '../images/greek_salad.jpg'

const Testimonials = () => {
    return (
        <section className='testimonials'>
            <h3 className='header--testimonials'>Testimonials</h3>
            <section className='testimonials--box'>
                <article className='testimonials--article'>
                    <header className='rating'>
                        <h4>Rating</h4>
                        <section>
                            <span><img src={star} alt="star-rating" className='rating-star'/></span>
                            <span className='rating-digit'>4</span>
                        </section>
                    </header>
                    <img src={person1} alt="" />
                    <h6>Jane</h6>
                    <p>Great Food!</p>
                </article>
                <article className='testimonials--article'>
                    <header className='rating'>
                        <h4>Rating</h4>
                        <section>
                            <span><img src={star} alt="star-rating" className='rating-star'/></span>
                            <span className='rating-digit'>5</span>
                        </section>
                    </header>
                    <img src={person2} alt="" />
                    <h6>Micheal</h6>
                    <p>Delicious!</p>
                </article>
                <article className='testimonials--article'>
                    <header className='rating'>
                        <h4>Rating</h4>
                        <section>
                            <span><img src={star} alt="star-rating" className='rating-star'/></span>
                            <span className='rating-digit'>3</span>
                        </section>
                    </header>
                    <img src={person3} alt="" />
                    <h6>George</h6>
                    <p>Splendid!</p>
                </article>
                <article className='testimonials--article'>
                    <header className='rating'>
                        <h4>Rating</h4>
                        <section>
                            <span><img src={star} alt="star-rating" className='rating-star'/></span>
                            <span className='rating-digit'>5</span>
                        </section>
                    </header>
                    <img src={person4} alt="" />
                    <h6>Kate</h6>
                    <p>Amazing!</p>
                </article>
            </section>
        </section>
    )
}

export default Testimonials;