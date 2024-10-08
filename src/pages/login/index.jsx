import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { InputMask } from '@react-input/mask';
import facebookSvg from '../../assets/faceboock.svg'
import googleSvg from '../../assets/google.svg'

const Login = () => {
  const [tel, setTel] = useState('')
    
  return (
    <div className="login mx-auto text-center text-white">
      <div className="mb-[100px]">
        <Link to="/"><IoIosArrowBack className=" bg-[#111111] h-[60px] w-[60px] p-5 rounded-[10px]" /></Link>
        <h2 className="text-[30px] font-bold">Регистрация</h2>
        <p className="text-[16px] mx-auto w-[300px] mb-4">Введите номер телефона для того чтобы войти или пройти регистрацию</p>
        <div className="flex flex-col gap-3">
        <InputMask onChange={(e) => setTel(e.target.value)} value={tel} className="w-[380px] h-[52px] text-white mx-auto bg-[#111111] rounded-[8px] p-3 font-bold" mask="+998 (__) ___-__-__" replacement={{ _: /\d/ }} />
          <Link className="w-[380px] h-[52px]  mx-auto bg-[red] rounded-[8px] p-3 font-bold" to="/sms">
            <button>Регистрация</button>
          </Link>
          <p>или</p>
        </div>
        <div className="flex justify-center items-center gap-3" >
          <a className="flex gap-3 bg-[#111111] p-4 rounded-[10px]" href="#"><img src={facebookSvg} alt="Facebook" />Facebook</a>
          <a className="flex gap-3 bg-[#111111] p-4 rounded-[10px]" href="#"><img src={googleSvg} alt="Google" />Google</a>
        </div>
      </div>
    </div>
  )
}
export default Login 
  