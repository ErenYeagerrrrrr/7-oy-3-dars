import { Link } from "react-router-dom";

const Render = ({ data = [], loading, error }) => {
    console.log(data);

    return (
        <ul className="flex justify-between items-center mt-8">
            <li><button><img src="/public/Group 24.svg" alt="" /></button></li>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {typeof data === 'object' && data.map(post => {
                return (
                    <Link to={`/seance/${post.id}`}>
                        <li key={post.id}>
                            <div className="w-[280px] h-[400px] rounded-[10px] mb-2"><img className="w-full h-full rounded-[10px]" src={post.img} alt="" /></div>
                            <h4>{post.title}</h4>
                            <p>Комедия, Фэнтези</p>
                        </li>
                    </Link>
                )
            })
            }
            <li><button><img src="/public/Group 23.svg" alt="" /></button></li>
        </ul>
    )
}

export default Render