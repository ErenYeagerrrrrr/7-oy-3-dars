

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
            <a href="#" className="text-[red]">View all  ></a>
          </div>
          <ul className="flex justify-between items-center mt-8">
            <li><button><img src="/public/Group 24.svg" alt="" /></button></li>
            <li>
              <div className="w-[280px] h-[400px] bg-[#1D1D1D] rounded-[10px] mb-2"></div>
              <h4>Kung Fu Panda 4
                ENGLISH</h4>
              <p>Комедия, Фэнтези</p>
            </li>
            <li>
              <div className="w-[280px] h-[400px] bg-[#1D1D1D] rounded-[10px] mb-2"></div>
              <h4>Dune 2 – EN</h4>
              <p>Фантастика, Боевик</p>
            </li>
            <li>
              <div className="w-[280px] h-[400px] bg-[#1D1D1D] rounded-[10px] mb-2"></div>
              <h4>Дюна – RU</h4>
              <p>Фантастика, Боевик</p>
            </li>
            <li>
              <div className="w-[280px] h-[400px] bg-[#1D1D1D] rounded-[10px] mb-2"></div>
              <h4>Kung Fu Panda 4 Russian</h4>
              <p>Комедия, Фэнтези</p>
            </li>
            <li><button><img src="/public/Group 23.svg" alt="" /></button></li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default HomePage
