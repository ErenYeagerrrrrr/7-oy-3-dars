import Footer from "../../components/Footer"
import Header from "../../components/Header"

const MainLayout = (props) => {
    return (
        <>
            <div className="container max-w-[1360px] mx-auto" >
                <Header />
                <div>
                    {props.children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MainLayout