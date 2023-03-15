import image from "../../assets/OverviewImages/Screenshot_20230315_123732.png"
export default function Overview() {
    const pinkBackground = { backgroundColor: "#f64697" }

    return <main className="h-screen  grid grid-cols-4 grid-rows-1">
        <div style={pinkBackground} className="pl-20 flex justify-center gap-16 flex-col col-start-1 col-end-4 row-start-1 row-end-2">
            <div className="text-[90px] w-[500px] leading-none font-extrabold text-white">We make skincare Intelligent</div>
            <div><span className="text-[80px] w-96 leading-none font-extrabold text-white">COS</span><span className="text-[80px] w-96 leading-none font-extrabold text-gray-700 ">IQ</span></div>
        </div>
        <img className="place-self-center col-start-3 col-end-5 row-start-1 row-end-2" src={image} />

    </main>
}