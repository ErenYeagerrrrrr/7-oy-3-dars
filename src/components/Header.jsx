import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header text-white px-[50px] py-[50px]">
            <div className="main-header flex justify-between items-center">
                <div>
                    <img src="../../public/logo.svg" alt="logo" />
                </div>
                <ul className="flex gap-3">
                    <li><a href="#"><img src="../../public/Main.svg" alt="" /></a></li>
                    <li><a href="#"><img src="../../public/Transfer.svg" alt="" /></a></li>
                    <li><a href="#"><img src="../../public/Monitoring.svg" alt="" /></a></li>
                    <li><a href="#"><img src="../../public/Monitoring (1).svg" alt="" /></a></li>
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