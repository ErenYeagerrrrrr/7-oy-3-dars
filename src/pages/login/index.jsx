import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="login mx-auto text-center text-white">
      <div>
        <h2 className="text-[30px] font-bold">Регистрация</h2>
        <p className="text-[16px] mx-auto w-[300px] mb-4">Введите номер телефона для того чтобы войти или пройти регистрацию</p>
        <div className="flex flex-col gap-3">
          <input type="text" className="w-[380px]  mx-auto h-[52px] bg-[#111111] p-3 rounded-[8px]" placeholder="Номер телефона" />
          <Link  className="w-[380px] h-[52px]  mx-auto bg-[red] rounded-[8px] p-3 font-bold" to="/">
            <buton>Регистрация</buton>
          </Link>
          <p>или</p>
        </div>
        <div className="flex justify-center items-center gap-3" >
          <a className="flex gap-3 bg-[#111111] p-4 rounded-[10px]" href="#"><img src="/public/faceboock.svg" alt="Facebook" />Facebook</a>
          <a className="flex gap-3 bg-[#111111] p-4 rounded-[10px]" href="#"><img src="/public/google.svg" alt="Google" />Google</a>
        </div>
      </div>
    </div>
  )
}

export default Login