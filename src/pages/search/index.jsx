import { useState } from "react"
import useGetData from "../../components/useCard"
import searchs from "../../assets/search.svg"

const Search = () => {
    const [search, setSearch] = useState('')
    const { data = [] } = useGetData('https://posts-server-w1w6.onrender.com/films')

    return (
        <div className="text-center text-white p-5">
            <img className="absolute top-[212px] left-[38%] translate-x-[50%] translate-y-[-50%]" src={searchs} alt="search" />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} className="w-[380px] text-center h-[64px] text-white mx-auto bg-[#111111] rounded-[8px] p-3 font-bold" />
            <ul className="mt-5 grid grid-cols-2 ">
                    {
                        search.length > 0 ? data.filter(item => item.title.toLowerCase().includes(search)).map(item => (
                            <li key={item.id} className="w-[580px] flex gap-4 p-3 rounded-xl mb-4 bg-[#111111]">
                                <div className="w-[260px] h-[260px]">
                                    <img style={{ width: '100%', height: '100%' }} className="rounded-xl" src={item.img} alt="" />
                                </div>
                                <div>
                                    <h3 className="mb-4 text-[20px] font-bold">{item.title}</h3>
                                    <p className="mb-3">2024 • EN • 6+ • 1ч 34м / 94 минут</p>
                                </div>
                            </li>
                        )) : <li className="text-end">Ничего не найдено</li>
                    }
            </ul>
        </div>
    )
}

export default Search