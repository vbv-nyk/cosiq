import GraphAndHeart from "../../assets/MissionImages/GraphAndHeart.png"

export default function Mission() {
    const pinkBackground = { backgroundColor: "#f64697" }
    return (<section className="mt-5">
        <div className="flex items-center justify-evenly p-12  gap-10">
            <div className="flex flex-col gap-5 text-xl justify-center items-center w-[300px]">
                <p >To be purveyors of <strike>life altering</strike>,
                    <strike>magical</strike>,<strike>superhuman</strike>,
                    <strike>ultra whitening</strike>
                    ,
                    <strike>age reversing</strike> ,
                    <strike>minimalistic</strike>
                    ,
                    <strike>uberfantastic</strike>,
                    <strike>   chemical free</strike> molecular
                    skincare products that work</p>
                <p>
                    Affordable, Ethical & efficacious
                    solutions backed by science
                </p>
            </div>
            <div className="text-[50px] relative bottom-7 font-bold">MISSION</div>
            <div className="text-[50px] relative top-7 font-bold">VISION</div>
            <div className="flex flex-col gap-5 text-xl justify-center  w-[300px]">
                <p>
                    To be an AI+ML powered go-to beauty
                    community that is your trusted partner
                    in your entire skincare journey with
                    content, knowledge & safe, affordable
                    products
                </p>
                <div>
                    <div>To educate people that</div>
                    <div className="text-2xl font-bold">Skincare ≠ Cosmetics</div>
                </div>
            </div>
        </div>
        <div style={pinkBackground} className="flex items-center justify-evenly p-10  gap-10 text-white">
            <div className="flex flex-col gap-5 text-xl justify-center  w-[300px]">
                <p className="text-2xl">A Community Approach</p>
                <p>
                    To power our growth with customer
                    reviews, community responses
                    Intelligent content & interactive
                    knowledge sharing properties across
                    the web building our CosIQ Club
                </p>
            </div>
            <img src={GraphAndHeart} />
            <div className="flex flex-col gap-5 text-xl justify-center  w-[300px] text-white">
                <p className="text-2xl">Building for the Future</p>
                <p>
                    A genZ oriented brand that offers
                    cutting edge actives in smart
                    formulations with #saferesults. We
                    communicate clearly, the way our
                    customers love.
                </p>
            </div>
        </div>
    </section>)
}