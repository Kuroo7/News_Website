import { useEffect, useState } from "react"
const useNews = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        //Api call
        getRestaurants("https://newsapi.org/v2/everything?q=india&from=2023-04-22&sortBy=publishedAt&apiKey=42b7e5e51c22452381b26ce31c67d2a8")
    }, [])

    async function getRestaurants(api) {
        const apiData = await fetch(api)
        const json = await apiData.json();
        setNews(json?.articles);
    }
    return news
}

export default useNews