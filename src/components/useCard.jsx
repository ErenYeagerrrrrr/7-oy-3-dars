import { useState } from "react"
import { request } from "../utils/api/request"
import { toast } from "react-toastify"
import { useQuery} from "@tanstack/react-query"


const useCard = (url) => {
    // const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    // const quaryClient = useQueryClient()

    const { data } = useQuery({
        queryKey: ['movies'],
        queryFn: () => {
            return request.get(url)
                .then((res) => {
                    if (res.status !== 200) {
                        throw new Error('Failed to fetch posts')
                    }
                    return res.data

                })
                .catch((err) => {
                    setError(err.message || 'Failed to fetch posts')
                    toast.error(err.message || 'Failed to fetch posts')
                })
                .finally(() => {
                    setIsLoading(false)
                })

        }
    })
    // useEffect(() => {
    //     setPosts(data)

    // }, [])

    // const [posts, setPosts] = useState([])
    // const [error, setError] = useState(null)
    // const [isLoading, setIsLoading] = useState(false)
    // useEffect(() => {
    //     setIsLoading(true)
    //     request.get(url)
    //         .then((res) => {
    //             if (res.status !== 200) {
    //                 throw new Error('Failed to fetch posts')
    //             }
    //             setPosts(res.data)

    //         })
    //         .catch((err) => {
    //             setError(err.message || 'Failed to fetch posts')
    //             toast.error(err.message || 'Failed to fetch posts')
    //         })
    //         .finally(() => {
    //             setIsLoading(false)
    //         })

    // }, [])


    return (
        {
            data,
            loading: isLoading,
            error
        }
    )
}

export default useCard