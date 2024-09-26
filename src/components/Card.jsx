import { useEffect, useState } from "react"


const Card = () => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('https://posts-server-w1w6.onrender.com/films')
                if (!response.ok) {
                    throw Error('Did not recieve expected data')
                }
                const data = await response.json()
                setPosts(data)
                console.log(posts);
            } catch (error) {
                setError(error.message)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])


    return (
        <div>
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
            <ul className="flex justify-between items-center mt-8">
                <li><button><img src="/public/Group 24.svg" alt="" /></button></li>
                {posts.map(post => {
                    return (
                        <li key={post.id}>
                            <div className="w-[280px] h-[400px] rounded-[10px] mb-2"><img className="w-full h-full rounded-[10px]" src={post.img} alt="" /></div>
                            <h4>{post.title}</h4>
                            <p>Комедия, Фэнтези</p>
                        </li>

                    )
                })
                }
                <li><button><img src="/public/Group 23.svg" alt="" /></button></li>
            </ul>
        </div>

    )
}

export default Card