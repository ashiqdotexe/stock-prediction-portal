import React from 'react'
import { Button } from './Button'
const Main = () => {
    return (
        <>
            <div className='container'>
                <div className='p-5 text-center  rounded'>
                    <h1 className='text-light'>Stock Prediction Portal</h1>
                    <p className='text-light lead'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam fugit perferendis, libero tempora voluptatem quasi maxime, magnam iusto eveniet saepe sunt debitis quia commodi voluptatibus nam id. Exercitationem, laborum recusandae?</p>
                    <Button text="Login" class="btn-outline-info" url="/login" />
                </div>
            </div>

        </>
    )
}

export default Main