import Card from "../../components/Card"

const Servis = () => {
  return (
    <div>
      <ul className="flex gap-4 mt-4 px-[50px] items-center text-white">
        <li><button className="w-32 h-12 bg-[#111111] rounded-xl hover:bg-[red]"><img src="" alt="" />Все</button></li>
        <li><button className="w-32 h-12 bg-[#111111] rounded-xl hover:bg-[red]"><img src="" alt="" />Кино</button></li>
        <li><button className="w-32 h-12 bg-[#111111] rounded-xl hover:bg-[red]"><img src="" alt="" />Театр</button></li>
        <li><button className="w-32 h-12 bg-[#111111] rounded-xl hover:bg-[red]"><img src="" alt="" />Концерты</button></li>
        <li><button className="w-32 h-12 bg-[#111111] rounded-xl hover:bg-[red]"><img src="" alt="" />Концерты</button></li>
        <li><button className="w-32 h-12 bg-[#111111] rounded-xl hover:bg-[red]"><img src="" alt="" />Другие</button></li>
        <li><button className="w-32 h-12 bg-[#111111] rounded-xl hover:bg-[red] ml-[250px]"><img src="" alt="" />Залы</button></li>
      </ul>
      <div className="contents__block mt-4 mb-[100px] text-white">
        <div className="contents__block__content flex justify-between align-center ">
          <h3>На неделе</h3>
          <a href="#" className="text-[red]">View all  </a>
        </div>
        <Card />
      </div>
      
      <div className="contents__block mt-4 mb-[100px] text-white">
        <div className="contents__block__content flex justify-between align-center ">
          <h3>Кино</h3>
          <a href="#" className="text-[red]">View all  </a>
        </div>
        <Card />
      </div>
      <div className="contents__block mt-4 mb-[100px] text-white">
        <div className="contents__block__content flex justify-between align-center ">
          <h3>Театр</h3>
          <a href="#" className="text-[red]">View all  </a>
        </div>
        <Card />
      </div>
      <div className="contents__block mt-4 mb-[100px] text-white">
        <div className="contents__block__content flex justify-between align-center ">
          <h3>Мероприятия</h3>
          <a href="#" className="text-[red]">View all  </a>
        </div>
        <Card />
      </div>
    </div>

  )
}

export default Servis