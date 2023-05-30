import { useParams } from "react-router-dom"

const NewsDetails = () => {
    const params = useParams()
    return (
        <h1>This is {params.id}</h1>
    )
}
export default NewsDetails