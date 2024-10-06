// import { useQuery, useQueryClient } from '@tanstack/react-query'

import Loader from "../../components/Loader"
import Render from "../../components/Render"
import useGetData from "../../components/useCard"
import rectangle from "../../../public/Rectangle 64.png"
import rectangle2 from "../../../public/Rectangle 6.svg"
import rectangle3 from "../../../public/Rectangle 7.png"
import rectangle4 from "../../../public/Rectangle 8.png"
import rectangle5 from "../../../public/Rectangle 9.png"
import watch from "../../../public/Content.svg"
 
const HomePage = () => {
  const {data, loading, error} = useGetData('https://posts-server-w1w6.onrender.com/films')

  if (loading) {
    return <div><Loader/></div>
  }
  if (error) {
    return <div>Error</div>
  }

  return (

    <div className="main text-white">
      <section className="animation">
        <div className="animation__block relative" >
          <div className="animation__block__image w-auto h-[640px]">
            <img style={{width: '100%', height:"auto"}} src={rectangle} alt="" />
          </div>
          <div className="animation__block__content absolute bottom-[55px] right-0 left-0 text-white text-center mb-4">
            <h2 className="text-[30px] font-bold">Kung Fu Panda 4</h2>
            <p className="text-[20px] mb-4">2024 • Комедия • 1ч 34м • EN • 6+</p>
            <button className="py-[20px] px-[40px] bg-white rounded-[10px] mb-4"><img src={watch} alt="watch" /></button>
          </div>
          <ul className="flex gap-3 mt-4 mx-[30%] items-center">
            <li><button><img src="/public/Group 24.svg" alt="" /></button></li>
            <li><img src={rectangle2} alt="" /></li>
            <li><img src={rectangle3} alt="" /></li>
            <li><img src={rectangle4} alt="" /></li>
            <li><img src={rectangle5} alt="" /></li>
            <li><button><img src="../../../public/Group 23.svg" alt="" /></button></li>
          </ul>
        </div>
      </section>
      <section className="contents">
        <div className="contents__block mt-4 mb-[100px]">
          <div className="contents__block__content flex justify-between align-center ">
            <h3>For a week</h3>
            <a href="#" className="text-[red]">View all  </a>
          </div>
          <div>
            <Render data={data} loading={loading} error={error}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
