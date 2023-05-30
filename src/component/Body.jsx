import Card from "./Card"
import { useState, useEffect } from "react"
import ShiverUi from "./ShiverUi"
import { filterData } from "../utils/helper"
import useOnline from "../hooks/useOnline"
// const data = [
//     {
//         id: 1,
//         title: "Burger King",
//         food: "Allo Tikki",
//         rate: "4.2",
//     },
//     {
//         id: 2,
//         title: "KFC",
//         food: "Chicken Burger",
//         rate: "4.2",
//     },
//     {
//         id: 3,
//         title: "Burger Singh",
//         food: "Tikki",
//         rate: "4.2",
//     },
// ]


const Body = () => {
    const [searchText, setSearchText] = useState("")
    const [allRestaurant, setAllRestaurant] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])


    useEffect(() => {
        //Api call
        getRestaurants("https://newsapi.org/v2/everything?q=india&from=2023-05-22&sortBy=publishedAt&apiKey=42b7e5e51c22452381b26ce31c67d2a8")
    }, [])

    async function getRestaurants(api) {
        const apiData = await fetch(api)
        const json = await apiData.json();
        const fData = json?.articles;
        setFilteredRestaurant(fData);
        setAllRestaurant(fData);
    }



    const handleChange = (e) => {
        setSearchText(e.target.value)
    }
    // function filterData(searchText, allRestaurant) {
    //     return allRestaurant.filter((res) => res?.title?.toLowerCase().startsWith(searchText.toLowerCase()))
    // }

    const live = useOnline();
    if (!live) {
        return <h1>Oops you are offline</h1>
    }

    return (
        <>
            <div className="search-container p-5 bg-pink-100 my-3">
                <input
                    className="rounded-md pl-3"
                    type="text"
                    placeholder="search"
                    value={searchText}
                    onChange={handleChange}
                />
                <button onClick={() => {
                    const newData = filterData(searchText, allRestaurant)
                    setFilteredRestaurant(newData)
                }}
                    className=" px-2 m-2 bg-pink-200 text-black rounded-md  hover:bg-white"> Search</button>
            </div>
            {!filteredRestaurant.length ? (<ShiverUi />) :
                (
                    <div className="flex justify-center flex-wrap">
                        {
                            filteredRestaurant.map((item, index) => {
                                return <Card {...item} key={index} />
                            })
                        }
                    </div>
                )
            }
        </>
    )
}
export default Body