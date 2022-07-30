import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { findLocationAreaRef , addDoc} from '../firebase';


const City = () => {
    const [cityNameKarachi, setcityNameKarachi] = useState('');
    const [cityNameHyderabad, setcityNameHyderabad] = useState('');
    const navigate = useNavigate()


    // const onclickKarachi = () => {
    //     setcityNameKarachi('Karachi');
    //     setcityNameHyderabad('');
    //     setTimeout(() => {
    //         navigate('/')


    //     }, 100)
    // }
    // console.log(cityNameKarachi);


    // const onclickHyderabad = () => {
    //     setcityNameHyderabad('Hyderabad');
    //     setcityNameKarachi('');
    //     setTimeout(() => {
    //         navigate('/')


    //     }, 100)

    // }
    // console.log(cityNameHyderabad);

    const LocationFindOut =  async (e) => {
        const objLotion = {

            userLocation: e.target.innerHTML

        }

        await addDoc(findLocationAreaRef, objLotion);
        setTimeout(() => {
            navigate('/')


        }, 100)

    }

    return (
        <div className="main-div-location">
            <div className='mainDiv-Area'>
                <div className='location-Div-city'>
                    <div className="container">
                        <h5> Select City</h5>

                        <div className='select-div-city' onClick={LocationFindOut}>
                            Hyderabad
                        </div>
                        <div className='select-div-city' onClick={LocationFindOut}>
                            Karachi
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default City
