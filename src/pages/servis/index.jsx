import Loader from "../../components/Loader"
import Render from "../../components/Render"
import useGetData from "../../components/useCard"
import infinity from "../../assets/Infinity.svg"
import boshqa from "../../assets/boshqa.svg"
import zal from "../../assets/zal.svg"
import sport from "../../assets/basketball-line.svg"
import theatre from "../../assets/clapperboard-line.svg"
import kino from "../../assets/Vector.svg"
import konsert from "../../assets/movie-2-line.svg"
import CalendarBtn from "../../components/button/CalendarBtn"
const Servis = () => {
  const { data, loading, error } = useGetData('https://posts-server-w1w6.onrender.com/films')

  if (loading) {
    return <div><Loader /></div>
  }
  if (error) {
    return <div>Error</div>
  }
  return (
    <div>
      <ul className="flex gap-4 mt-4 px-[50px] items-center text-white">
        <li><button className="px-8 py-3 gap-2 flex bg-[#111111] rounded-xl hover:bg-[red]"><img src={infinity} alt="" />Все</button></li>
        <li><button className="px-8 py-3 gap-2 flex bg-[#111111] rounded-xl hover:bg-[red]"><img src={kino} alt="" />Кино</button></li>
        <li><button className="px-8 py-3 gap-2 flex bg-[#111111] rounded-xl hover:bg-[red]"><img src={theatre} alt="" />Театр</button></li>
        <li><button className="px-8 py-3 gap-2 flex bg-[#111111] rounded-xl hover:bg-[red]"><img src={konsert} alt="" />Концерты</button></li>
        <li><button className="px-8 py-3 gap-2 flex bg-[#111111] rounded-xl hover:bg-[red]"><img src={sport} alt="" />Спорт</button></li>
        <li><button className="px-8 py-3 gap-2 flex bg-[#111111] rounded-xl hover:bg-[red]"><img src={boshqa} alt="" />Другие</button></li>
        <li><button className="px-8 py-3 gap-2 flex bg-[#111111] rounded-xl hover:bg-[red] ml-[250px]"><img src={zal} alt="" />Залы</button></li>
      </ul>
      <div className="contents__block mt-4 mb-[100px] text-white">
        <div className="contents__block__content flex justify-between align-center ">
          <h3>На неделе</h3>
          <a href="#" className="text-[red]">View all  </a>
        </div>
        <Render data={data} loading={loading} error={error} />
      </div>

      <CalendarBtn/>

      <div className="contents__block mt-4 mb-[100px] text-white">
        <div className="contents__block__content flex justify-between align-center ">
          <h3>Кино</h3>
          <a href="#" className="text-[red]">View all  </a>
        </div>
        <Render data={data} loading={loading} error={error} />
      </div>
      <div className="contents__block mt-4 mb-[100px] text-white">
        <div className="contents__block__content flex justify-between align-center ">
          <h3>Театр</h3>
          <a href="#" className="text-[red]">View all  </a>
        </div>
        <Render data={data} loading={loading} error={error} />
      </div>
      <div className="contents__block mt-4 mb-[100px] text-white">
        <div className="contents__block__content flex justify-between align-center ">
          <h3>Мероприятия</h3>
          <a href="#" className="text-[red]">View all  </a>
        </div>
        <Render data={data} loading={loading} error={error} />
      </div>
    </div>

  )
}

export default Servis