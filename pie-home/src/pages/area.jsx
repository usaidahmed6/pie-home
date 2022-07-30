import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findLocationAreaRef, onSnapshot, collection, addDoc, db, AreasNameRef, getDocs } from '../firebase';
import './area.css'

const Area = () => {
    const [findArea, setFindArea] = useState('');
    const [nameAreas, setNameAreas] = useState([false]);
    const [onChanchSearch, setonChanchSearch] = useState('');
    const navigate = useNavigate()

    const handleLocation = async (e) => {
        setFindArea(e.target.innerHTML);

        const objLotionArea = {

            userLocationArea: e.target.innerHTML

        }

        await addDoc(findLocationAreaRef, objLotionArea);



        setTimeout(() => {
            navigate('/')

        }, 1500)
    }

    useEffect(() => {



        onSnapshot(
            collection(db, "AddAraesName"),
            (snapshot) => {
                getAreas();
            },

            (error) => {
                alert(error);
            }
        );




    }, [])
    // console.log(findArea);
    const getAreas = async () => {

        const querySnapshot = await getDocs(AreasNameRef);
        let Area = [];


        querySnapshot.forEach((doc) => {
            console.log(doc.id, "  hey ====> ", doc.data());
            Area.push({ id: doc.id, ...doc.data() });
        });


        setNameAreas(Area);



    };

    // console.log(nameAreas);
    const searchBox = (e) => {
        setonChanchSearch(e.target.value)

    }

    console.log('search ki value', onChanchSearch);
    // console.log('areaLocation', findArea);

    const searchArea = (e) => {
        setNameAreas(nameAreas.filter((areas) =>
            areas.AreasName.toLowerCase().includes(onChanchSearch.toLowerCase())
        ))
        console.log('search 112', nameAreas);
      

    }
    return (
        <div className="main-div-location">
            <div className='mainDiv-Area'>
                <div className='location-Div-city'>
                    <h4 className='mx-4 my-2'>Select Area </h4>
                    <form onChange={(e) => { searchArea(e) }}>
                        <input type="text" className='searchInput' placeholder='Search' onChange={searchBox} />
                    </form>
                    <ul className='area-list'>

                        {nameAreas.map((data, index) =>

                            <li className='list-area' key={index} onClick={handleLocation}>{data.AreasName}</li>
                        )}



                    </ul>

                </div>

            </div>



        </div>
    )
}

export default Area
