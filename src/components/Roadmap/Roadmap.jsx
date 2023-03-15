import roadmap1 from "../../assets/RoadmapImages/Roadmap1.png"
import roadmap2 from "../../assets/RoadmapImages/Roadmap2.png"
export default function Roadmap() {
    const pinkBackground = { backgroundColor: "#f64697" }

    return (
        <section className="grid grid-rows-2 grid-cols-2">
            <div style={pinkBackground} className="flex flex-col col-start-1 col-end-2 row-start-1 row-end-2  text-white text-xl gap-3 justify-center items-start px-32 py-0">
                <div className="text-3xl">ROADMAP: PRODUCT</div>
                <div>We are growing horizontally and
                    entering new segments with plans to
                    cover the entire CTM category by 2022
                    and launch into the bodycare & hair
                    care segments in 2023</div>
                <div>
                    <div>Current: 25 SKUs</div>
                    <div>Hero Product: Sunscreen Serum</div>
                </div>
            </div>
            <div className="col-start-2 col-end-3 row-start-1 row-end-2">
                <img src={roadmap2} />
            </div>
            <div style={pinkBackground} className="flex  flex-col col-start-2 col-end-3 row-start-2 row-end-3 text-white text-xl gap-3 justify-center items-start px-32 py-0">
                <div className="text-3xl">ROADMAP: PRODUCT</div>
                <div>We are growing horizontally and
                    entering new segments with plans to
                    cover the entire CTM category by 2022
                    and launch into the bodycare & hair
                    care segments in 2023</div>
            </div>
            <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                <img src={roadmap1} />
            </div>
        </section>
    )
}