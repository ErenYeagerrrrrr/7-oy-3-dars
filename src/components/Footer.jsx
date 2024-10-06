import logotype from "../assets/LOGOTYPE.svg"
import playMarket from "../assets/image 8.svg"
import appStore from "../assets/image 7.svg"
import oferta from "../assets/file-list-2-line.svg"
import reklama from "../assets/shining-line.svg"
import FAQ from "../assets/question-line.svg"
import contact from "../assets/phone-line.svg"
import kino from "../assets/Vector.svg"
import theatre from "../assets/clapperboard-line.svg"
import konsert from "../assets/movie-2-line.svg"
import sport from "../assets/basketball-line.svg"
import set from "../assets/question-line.svg"
import instagram from "../assets/instagram-line.svg"
import facebook from "../assets/facebook-circle-line.svg"
import youtube from "../assets/youtube-line.svg"
const Footer = () => {
  return (
    <div className="footer text-white">
      <div className="main-footer max-w-[1180px] mx-auto flex justify-between bg-[#111111] p-[30px] rounded-[10px] mb-10">
        <div className="footer__logo">
          <a href="#"><img className="mb-[48px]" src={logotype} alt="logo" /></a>
          <a href="#"><img className="mb-[8px]" src={playMarket} alt="Play Market" /></a>
          <a href="#"><img src={appStore} alt="App Store" /></a>
        </div>
        <ul>
          <li>О нас</li>
          <li><a className="flex gap-2 mt-3 hover:text-[red]" href="#"><img src={oferta} alt="" />Публичная оферта</a></li>
          <li><a className="flex gap-2 mt-3 hover:text-[red]" href="#"><img src={reklama} alt="" />Реклама</a></li>
          <li><a className="flex gap-2 mt-3 hover:text-[red]" href="#"><img src={FAQ} alt="" />F.A.Q</a></li>
          <li><a className="flex gap-2 mt-3 hover:text-[red]" href="#"><img src={contact} alt="" />Контакты</a></li>
        </ul>
        <ul>
          <li>Категории</li>
          <li><a className="flex gap-2 mt-3 hover:text-[red]" href="#"><img src={kino} alt="" />Кино</a></li>
          <li><a className="flex gap-2 mt-3 hover:text-[red]" href="#"><img src={theatre} alt="" />Театр</a></li>
          <li><a className="flex gap-2 mt-3 hover:text-[red]" href="#"><img src={konsert} alt="" />Концерты</a></li>
          <li><a className="flex gap-2 mt-3 hover:text-[red]" href="#"><img src={sport} alt="" />Спорт</a></li>
        </ul>
        <ul>
          <li>Связаться с нами</li>
          <li><a className="flex gap-2 mt-3 mb-12 text-[red]" href="#">+998 (95) 897-33-38</a></li>
          <li><a className="flex gap-2 mt-3 hover:text-[red]" href="#"><img src={set} alt="" />Социальные сети</a></li>
          <li className="flex gap-2 mt-3 hover:text-[red]">
            <a href="https://www.instagram.com/"><img src={instagram} alt="instagram" /></a>
            <a href="https://www.facebook.com/"><img src={facebook} alt="facebook" /></a>
            <a href="https://www.youtube.com/"><img src={youtube} alt="youtube" /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer