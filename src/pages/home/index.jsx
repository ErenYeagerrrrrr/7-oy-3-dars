import Card from '../../components/Card'

const HomePage = () => {

  return (
    <div className="main text-white">
      <section className="animation">
        <div className="animation__block relative" >
          <div>
            <img src="../../../public/Rectangle 64.png" alt="" />
          </div>
          <div className="animation__block__content absolute bottom-[55px] right-0 left-0 text-white text-center mb-4">
            <h2 className="text-[30px] font-bold">Kung Fu Panda 4</h2>
            <p className="text-[20px] mb-4">2024 • Комедия • 1ч 34м • EN • 6+</p>
            <button className="py-[20px] px-[40px] bg-white rounded-[10px] mb-4"><img src="/public/Content.svg" alt="watch" /></button>
          </div>
          <ul className="flex gap-3 mt-4 mx-[30%] items-center">
            <li><button><img src="/public/Group 24.svg" alt="" /></button></li>
            <li><img src="../../../public/Rectangle 6.svg" alt="" /></li>
            <li><img src="../../../public/Rectangle 7.png" alt="" /></li>
            <li><img src="../../../public/Rectangle 8.png" alt="" /></li>
            <li><img src="../../../public/Rectangle 9.png" alt="" /></li>
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
          <Card />
        </div>
      </section>
    </div>
  )
}

export default HomePage
