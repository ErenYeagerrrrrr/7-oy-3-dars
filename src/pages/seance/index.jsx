import { useNavigate, useParams } from 'react-router-dom'
import useGetData from '../../components/useCard'
import Loader from '../../components/Loader'
import Bilet from '../../assets/bilet.svg'
import { IoIosArrowBack } from 'react-icons/io'
import { useState } from 'react'
import CalendarBtn from '../../components/button/CalendarBtn'
import BiletPrice from '../../components/button/BiletPrice'
import IMDB from '../../assets/Group 30.svg'
import Kinopoisk from '../../assets/Group 29.svg'
const Seance = () => {
    const [tab, setTab] = useState(1)
    const { id } = useParams()
    const navigate = useNavigate()

    const { data, loading, error } = useGetData(`https://posts-server-w1w6.onrender.com/films/${id}`)
    if (loading) {
        return <div><Loader /></div>
    }
    if (error) {
        return <div>Error</div>
    }
    return (
        <div className="animation relative mb-[100px]" >
            <div className="mb-[100px]">

                <div>
                    <IoIosArrowBack onClick={() => navigate(-1)} className="text-[red] bg-[#111111] w-16 h-16 rounded-xl absolute top-[50px] left-[50px] cursor-pointer" size={30} />
                    <img className="w-full h-[640px]" src={data.img} alt="" />
                </div>
                <div className="animation__block__content absolute top-[420px] right-0 left-0 text-white text-center mb-4">
                    <h2 className="text-[30px] font-bold">{data.title}</h2>
                    <p className="text-[20px] mb-4">2024 • Комедия • 1ч 34м • EN • 6+</p>
                    <button className="py-[20px] px-[120px] bg-[red] rounded-[10px] mb-4"><img src={Bilet} alt="watch" /></button>
                </div>
            </div>
            <button style={{ transform: 'translate(-50%' }} className="bg-[#111111] rounded-xl w-[380px] text-white ml-[50%]">
                <button onClick={() => setTab(1)} className={`px-7 py-5 w-[190px] rounded-xl ${tab === 1 ? "bg-[#1D1D1D] text-[red]" : ""}`}>Билеты</button>
                <button onClick={() => setTab(2)} className={`px-7 py-5 w-[190px] rounded-xl ${tab === 2 ? "bg-[#1D1D1D] text-[red]" : ""}`}>О фильме</button>
            </button>
            <div className=' text-white'>
                {tab === 1 ? (
                    <div>
                        <CalendarBtn />
                        <h3 className='text-[20px] font-bold my-4  pl-[50px]'>Cinematica</h3>
                        <p className='text-[16px] text-[#4D4D4D] pl-[50px]'>7, Улица Алмазар Шайхантахурский район</p>
                        <BiletPrice />
                    </div>
                ) : (
                    <div>
                        <div className='flex justify-center my-4 gap-4'>
                            <div>
                                <img src={IMDB} alt="" />
                            </div>
                            <div>
                                <img src={Kinopoisk} alt="" />
                            </div>
                        </div>
                        <ul className='w-[380px] mx-auto'>
                            <li className='text-[#A1A1A1] mb-4 justify-between'><span className='text-white font-bold'>Детали</span><span></span></li>
                            <li className='text-[#A1A1A1] mb-4 justify-between flex'><span>Продолжительность</span><span>1ч 34м / 94 минут</span></li>
                            <li className='text-[#A1A1A1] mb-4 justify-between flex'><span>Премьера</span><span>07 марта 2024</span></li>
                            <li className='text-[#A1A1A1] mb-4 justify-between flex'><span>Производство</span><span>США, Китай</span></li>
                            <li className='text-[#A1A1A1] mb-4 justify-between flex'><span>Жанр</span><span>Фэнтези, Комедия</span></li>
                            <li className='text-[#A1A1A1] mb-4 justify-between flex'><span>Режиссер</span><span>Майк Митчелл, Стефани Стайн</span></li>
                            <li className='text-[#A1A1A1] pb-4 border-b-2 border-b-[#1D1D1D] justify-between flex'><span>Возрастной рейтинг</span><span>6+</span></li>
                            <li>
                                <p className='my-4'>Сюжет</p>
                                <p className='text-[#4D4D4D] mb-6'>Продолжение приключений легендарного Воина Дракона, его верных друзей и наставника (часть вторая)</p>
                            </li>
                            <li>
                                <button className="py-[20px] px-[120px] bg-[red] rounded-[10px] mb-4"><img src={Bilet} alt="watch" /></button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Seance