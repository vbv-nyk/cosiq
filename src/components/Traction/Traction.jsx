import amazon from "../../assets/TractionImages/amazon.jpg"
import instagram from "../../assets/TractionImages/instagram.jpg"
import rightArrow from "../../assets/TractionImages/RightArrow.jpg"
import women from "../../assets/TractionImages/Women.jpg"
export default function Traction() {
    const pinkText = { color: "#f64697" }

    return (
        <div className="h-max">
            <div className="flex  py-10 gap-20 items-center justify-center flow-row">
                <div className="w-1/3  text-[70px] font-extrabold leading-none">
                    <div>Traction:
                        Building the</div>
                    <div>Cos<span style={pinkText}>IQ</span> cult</div>
                </div>
                <div className="w-[500px] flex flex-col gap-4">
                    <div className="font-extrabold text-2xl">Driving Growth and Building
                        Foundations to scale up with our
                        community & customer love.</div>
                    <div className="text-xl">
                        We are inundated with customer love across social
                        media channels and marketplace product reviews
                        from people that swear by our products. We add value
                        to their skin care journey with knowledge driven
                        advertisement & value marketing, gaining long term
                        trust and a valuable customer base
                    </div>
                    <div className="flex items-center gap-10">
                        <div className="flex items-center" >
                            <img className="h-16" src={amazon} />
                            <div className="font-bold" > 5800 Followers </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img className="h-10" src={instagram} />
                            <div className="font-bold">1000+ Reviews & Ratings</div>
                        </div>
                    </div>
                </div>
                <img className="h-5" src={rightArrow} />
            </div>
            <div>
                <img src={women} />
            </div>
        </div>
    )
}