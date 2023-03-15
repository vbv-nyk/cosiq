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
                            <img className="h-16" src="src/assets/TractionImages/amazon.jpg" />
                            <div className="font-bold" > 5800 Followers </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img className="h-10" src="src/assets/TractionImages/instagram.jpg" />
                            <div className="font-bold">1000+ Reviews & Ratings</div>
                        </div>
                    </div>
                </div>
                <img className="h-5" src="src/assets/TractionImages/RightArrow.jpg" />
            </div>
            <div>
                <img src="src/assets/TractionImages/Women.jpg" />
            </div>
        </div>
    )
}