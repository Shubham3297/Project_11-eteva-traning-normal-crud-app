import React, { createContext } from 'react'
import B from './B'

const FirstName = createContext();
const LastName = createContext();
function A() {
    return (
        <div>
            {/* <B name="Shubham"></B> */}
            <FirstName.Provider value="Shubham">
                <LastName.Provider value="Gaikwad">
                    <B></B>
                </LastName.Provider>
            </FirstName.Provider>

        </div>
    )
}

export default A;
export { FirstName, LastName };
