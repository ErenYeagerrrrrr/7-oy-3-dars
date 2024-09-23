
const Footer = () => {
  return (
    <div className="footer text-white">
      <div className="main-footer max-w-[1180px] mx-auto flex justify-between bg-[#111111] p-[30px] rounded-[10px] mb-10">
        <div className="footer__logo">
          <a href="#"><img className="mb-[48px]" src="/img/LOGOTYPE.svg" alt="logo" /></a>
          <a href="#"><img className="mb-[8px]" src="/img/image 8.svg" alt="Play Market" /></a>
          <a href="#"><img src="/img/image 7.svg" alt="App Store" /></a>
        </div>
        <ul>
          <li>О нас</li>
          <li><a className="flex gap-2 mt-3" href="#"><img src="/img/file-list-2-line.svg" alt="" />Публичная оферта</a></li>
          <li><a className="flex gap-2 mt-3" href="#"><img src="/img/shining-line.svg" alt="" />Реклама</a></li>
          <li><a className="flex gap-2 mt-3" href="#"><img src="/img/question-line.svg" alt="" />F.A.Q</a></li>
          <li><a className="flex gap-2 mt-3" href="#"><img src="/img/phone-line.svg" alt="" />Контакты</a></li>
        </ul>
        <ul>
          <li>Категории</li>
          <li><a className="flex gap-2 mt-3" href="#"><img src="/img/file-list-2-line.svg" alt="" />Кино</a></li>
          <li><a className="flex gap-2 mt-3" href="#"><img src="/img/shining-line.svg" alt="" />Театр</a></li>
          <li><a className="flex gap-2 mt-3" href="#"><img src="/img/question-line.svg" alt="" />Концерты</a></li>
          <li><a className="flex gap-2 mt-3" href="#"><img src="/img/phone-line.svg" alt="" />Спорт</a></li>
        </ul>
        <ul>
          <li>Связаться с нами</li>
          <li><a className="flex gap-2 mt-3 mb-12 text-[red]" href="#">+998 (95) 897-33-38</a></li>
          <li><a className="flex gap-2 mt-3" href="#"><img src="/img/question-line.svg" alt="" />Социальные сети</a></li>
          {/* <li><a className="flex gap-2 mt-3" href="#"><img src="/img/shining-line.svg" alt="" /></a></li>
          <li><a className="flex gap-2 mt-3" href="#"><img src="/img/phone-line.svg" alt="" /></a></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Footer