import { IoIosArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"
import VerificationInput from "react-verification-input";
import "./sms.css"
// import { toast } from "react-toastify";
import { useDispatch} from "react-redux";


const Sms = () => {
    // const state = useSelector((prev) => prev)
    const dispatch = useDispatch()
    
    const submitHandler = () => {
        fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            body: JSON.stringify({
                username: "mor_2314",
                password: "83r5^_",
            }),
            headers: {
                "Content-Type": "Application/json",
            },
        })
            .then((res) => {
                
                if (res.status >= 400) {
                    throw new Error("Login qilishda xatolik");
                }
                return res.json();
            })
            .then((json) => {
                dispatch({ type: "login", payload: json.token })
                localStorage.setItem("token", json.token);
                alert.success("Login muvaffaqiyatli amalga oshirildi");
            })
            .catch((err) => {
                alert.error(err.message);
            });
    };
    

    return (
        <div className="text-white mx-auto text-center">
            <div className="mb-[100px]">
                <Link to="/login"><IoIosArrowBack className=" bg-[#111111] h-[60px] w-[60px] p-5 rounded-[10px]" /></Link>
                <h2 className="text-[30px] font-bold">Введите СМС-код</h2>
                <p className="text-[16px] mx-auto w-[300px] mb-4">
                    Введите СМС-код, который мы отправили на номер <span className="text-[red]">+998901234567</span>
                </p>
                <VerificationInput classNames={{
                    container: "container1",
                    character: "character",
                    characterInactive: "character--inactive",
                    characterSelected: "character--selected",
                    characterFilled: "character--filled",
                }} type="number" placeholder=" " length={4} />
                <p className="mt-4 mb-6">Отправить код еще раз – <span className="text-[red]">00:59</span></p>
                <div>
                    <Link className="mx-auto bg-[red] rounded-[8px] px-24 py-4 font-bold" to="/">
                        <button onClick={submitHandler}>Регистрация</button>
                    </Link>
                </div>
            </div >
        </div >
    )
}

export default Sms