import { Link} from "react-router-dom"
import logo from "../assets/logo.svg"
import main from "../assets/Main.svg"
import transfer from "../assets/Transfer.svg"
import monitoring from "../assets/Monitoring.svg"
import monitoring2 from "../assets/Monitoring (1).svg"


const Header = () => {
    
    return (
        <div className="header text-white px-[50px] py-[50px]">
            <div className="main-header flex justify-between items-center">
                <div className="pr-28">
                    <a href="/"><img src={logo} alt="logo" /></a>
                </div>
                <ul className="flex gap-3">
                    <Link to="/"><li><a href="#"><img src={main} alt="" /></a></li></Link>
                    <Link to="/servis"><li><a href="#"><img src={transfer} alt="" /></a></li></Link>
                    <Link to="/bilet"><li><a href="#"><img src={monitoring} alt="" /></a></li></Link>
                    <Link to="search"><li><a href="#"><img src={monitoring2} alt="" /></a></li></Link>
                </ul>
                <div className="flex gap-5">
                    <select className="w-[60px] h-[30px] bg-[#000] text-[#fff] rounded-[5px] border border-[#000000]">
                        <option>Eng</option>
                        <option>Ru</option>
                        <option>Uz</option>
                    </select>
                    <Link to="/login">
                        <button className="w-[140px] h-[60px] bg-[red] text-[#fff] rounded-[8px] border border-[#000000]">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header