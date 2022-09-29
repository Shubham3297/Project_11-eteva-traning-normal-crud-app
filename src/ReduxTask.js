import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './Actions/index';

function ReduxTask() {
    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();
    return (
        <>
            <div className='container'>
                <h1>Increment/Decrement Counter</h1>
                <h4> Using React-Redux</h4>

                <div>
                    <a title='Decrement' onClick={() => dispatch(decNumber())}><span>-</span></a>
                    <input name='quantity' type='text' value={myState} />
                    <a title='Increment' onClick={() => dispatch(incNumber(5))}><span>+</span></a>
                </div>

            </div>
        </>
    )
}

export default ReduxTask
