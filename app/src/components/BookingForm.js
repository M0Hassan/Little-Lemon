import React, {useState} from 'react'


const BookingForm = (props) => {
    const [data, setData] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: ""
    });

    const disablebtn = () => {
        if (data.date.length === 0 || data.guests === 0) {
            return true;
        } else {
            return false;
        }
    }
    console.log(disablebtn());
    
    return (
        <article className='form--container'>
            <h1 className='form--header'>Book A Table</h1>
            <form className='form' onSubmit={(e) => {
                e.preventDefault()
                props.submit(data)
            }}>
                <section>
                    <label htmlFor='res-date'>Choose Date</label>
                    <input type='date' id="res-date" value={data.date} required onChange={(e) => {
                        props.dispatch(e.target.value); 
                        setData((prevState) => {
                            return {
                                ...prevState,
                                date: e.target.value
                            }
                        })
                    }
                    }/>
                </section>  
                <section>
                    <label htmlFor="res-time">Choose Time</label>
                    <select id='res-time' value={data.time} required onChange={(e) => 
                        setData((prevState) => {
                            return {
                                ...prevState,
                                time: e.target.value
                            }
                        })}>
                        {props.availableTimes.map((time, index) => {
                            return <option key={index}>{time}</option>
                        })}
                    </select>
                </section>  
                <section>
                    <label htmlFor='guests'>Number of Guests</label>
                    <input type="number" placeholder="1" min="1" max="10" step="1" id="guests" value={data.guests} required onChange={(e) => setData((prevState) => {
                            return {
                                ...prevState,
                                guests: e.target.value
                            }
                        })}/>
                </section>  
                <section>
                    <label htmlFor='ocassion'>Ocassion</label>
                    <select id="ocassion" value={data.occasion} required onChange={(e) => setData((prevState) => {
                            return {
                                ...prevState,
                                occasion: e.target.value
                            }
                        })}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </section>  
                <input className='submit' type="submit" value="Make your reservation" disabled={disablebtn()} />
            </form>
        </article>
    )
}

export default BookingForm;