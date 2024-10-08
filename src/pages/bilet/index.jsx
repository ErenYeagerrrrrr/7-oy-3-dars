import { useState } from "react"
import useStore from "../../zustant/store"
const Bilet = () => {
    const [tab1, setTab1] = useState(1)

    const { tickets, deleteTicket, setPaidTicket, paidTickets } = useStore()
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
                                tickets.map((item) => (
                                    <li className="p-3 pb-0 w-[580px] bg-[#2D2D2D] mb-4 rounded-xl" key={item.id}>
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
                                                paidTickets.filter(post => post.id === item.id).length > 0 ? (
                                                    <div className="flex flex-col">
                                                        <button className="bg-[#111111] w-[280px] py-3 rounded-xl mb-3">Оплачено</button>
                                                        <button onClick={
                                                            () => {
                                                                deleteTicket(item.id)
                                                            }
                                                        } className="bg-[#1D1D1D] w-[280px] py-3 rounded-xl">Отменить</button>
                                                    </div>
                                                ) : (
                                                    <button onClick={() =>
                                                        paidTickets.filter(item => item.id !== item.id).length > 0 ? alert("Такой билет уже Оплачено") : setPaidTicket(item)
                                                        
                                            } className="bg-[red] w-[280px] py-3 rounded-xl">Оплатить</button>
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
                {
                    paidTickets.map((item) => (
                        <li key={item.id} className="p-3 pb-0 w-[580px] h-[300px] bg-[#2D2D2D] mb-4 rounded-xl">
                            <div className="flex gap-4">
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
                                    <button className="bg-[#111111] px-4 py-3 rounded-xl mr-3">Оплачено</button>
                                    <button onClick={() => setTab1(1) || deleteTicket(item.id)} className="bg-[#111111] px-4 py-3 rounded-xl">Отменить</button>
                                </div>

                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
        </div >
    )
}

export default Bilet