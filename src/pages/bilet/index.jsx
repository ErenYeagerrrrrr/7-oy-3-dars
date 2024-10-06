import { useEffect, useState } from "react"
import Loader from "../../components/Loader"
import useGetData from "../../components/useCard"

const Bilet = () => {
    const [posts, setPosts] = useState([])
    const [tab1, setTab1] = useState(1)
    const { data = [], loading, error } = useGetData('https://posts-server-w1w6.onrender.com/films')

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem('films'))
        if (getData) {
            setPosts(getData)
            console.log(getData);

        }
    }, [])

    const local = (fetch) => {
        localStorage.setItem('films', JSON.stringify(fetch))
    }

    if (loading) {
        return <div><Loader /></div>
    }
    if (error) {
        return <div>Error</div>
    }

    console.log(data);
    return (
        <div className="text-white">
            <button style={{ transform: 'translate(-50%' }} className="bg-[#111111] rounded-xl w-[380px] text-white ml-[50%]">
                <button onClick={() => setTab1(1)} className={`px-7 py-5 w-[190px] rounded-xl ${tab1 === 1 ? "bg-[#1D1D1D] text-[red]" : ""}`}>Активные</button>
                <button onClick={() => setTab1(2)} className={`px-7 py-5 w-[190px] rounded-xl ${tab1 === 2 ? "bg-[#1D1D1D] text-[red]" : ""}`}>История</button>
            </button>
            {
                tab1 === 1 ? (
                    <div className="flex justify-center p-20">
                        <ul>
                            {
                                data.map((item) => (
                                    <li className="p-3 pb-0 w-[580px] h-[350px] bg-[#2D2D2D] mb-4 rounded-xl" key={item.id}>
                                        <div className="flex gap-4 pb-3 border-b-2 border-b-[#1D1D1D]">
                                            <div className="w-[260px] h-[260px]">
                                                <img style={{ width: '100%', height: '100%' }} className="rounded-xl" src={item.img} alt="" />
                                            </div>
                                            <div>
                                                <h3 className="mb-4 text-[20px] font-bold">{item.title}</h3>
                                                <p className="mb-3">2024 • EN • 6+ • 1ч 34м / 94 минут</p>
                                                <p className="mb-3">Magic Cinema</p>
                                                <p className="mb-3">Зал №1</p>
                                                <p className="mb-3">28 марта, 19:30</p>
                                                <p>–</p>
                                            </div>
                                        </div>
                                        <div className="py-2 px-4 flex justify-between items-center">
                                            <p>Бронирован (135 000 сум)</p>
                                            {
                                                posts.id === item.id ? (
                                                    <button className="bg-[#111111] w-[280px] py-3 rounded-xl">Оплачено</button>
                                                ): (
                                                    <button onClick={(e) => e.id === data.id ? local(item) : null} className="bg-[red] w-[280px] py-3 rounded-xl">Оплатить</button>
                                                )
                                            }
                                        </div>
                                    </li>))

                            }
                        </ul>
                    </div>
                ) : (
                    <div className="flex justify-center p-20">
                        <ul>
                            <li className="p-3 pb-0 w-[580px] h-[300px] bg-[#2D2D2D] mb-4 rounded-xl">
                                <div className="flex gap-4">
                                    <div className="w-[260px] h-[260px]">
                                        <img style={{ width: '100%', height: '100%' }} className="rounded-xl" src={posts.img} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="mb-4 text-[20px] font-bold">{posts.title}</h3>
                                        <p className="mb-3">2024 • EN • 6+ • 1ч 34м / 94 минут</p>
                                        <p className="mb-3">Magic Cinema</p>
                                        <p className="mb-3">Зал №1</p>
                                        <p className="mb-3">28 марта, 19:30</p>
                                        <p>–</p>
                                        <button className="bg-[#111111] px-4 py-3 rounded-xl">Оплачено</button>
                                    </div>
                                    
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default Bilet