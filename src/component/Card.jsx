import { addItem, removeItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"


const Card = (props) => {
    const dispatch = useDispatch()
    const [itemAdded, setItemAdded] = useState(false)
    const handleAddNews = () => {
        if (itemAdded) {
            // console.log(itemAdded);
            dispatch(removeItem())
            setItemAdded(false)
        }
        else {
            dispatch(addItem(props))
            setItemAdded(true)
        }
        // console.log(itemAdded);
    }
    function length() {
        if (props.title.length > 70) {
            return props.title.substring(0, 70) + "..."
        }
        else {
            return props.title
        }
    }
    // console.log(data);
    return (
        <div className="w-52 m-5 p-3 shadow-lg bg-pink-100">
            <img className="h-55" src={props.urlToImage} alt="Some image" />
            <h2 className="font-bold text-xl" >{length()}</h2>
            <span><a className="text-blue-600" href={props.url}>more</a></span>
            <h4 className="stuff">{props.publishedAt}</h4>
            <p className="stuff">{props.source?.name}</p>
            <button onClick={handleAddNews} className="p-2 m-5 bg-pink-50">{itemAdded ? "Remove news" : "Add News"}</button>
        </div>
    )

}
export default Card