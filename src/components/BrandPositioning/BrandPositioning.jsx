import bottom1 from "../../assets/BrandingImages/bottom1.jpg";
import bottom2 from "../../assets/BrandingImages/bottom2.jpg";
import bottom3 from "../../assets/BrandingImages/bottom3.jpg";
import bottom4 from "../../assets/BrandingImages/bottom4.jpg";
import bottom5 from "../../assets/BrandingImages/bottom5.jpg";
import bottom6 from "../../assets/BrandingImages/bottom6.jpg";
import rightArrow from "../../assets/BrandingImages/Right_Arrow.jpg"
import chart from "../../assets/BrandingImages/Chart.jpg"

function BottomProps({ img, title, content }) {
    return (<div className="flex flex-col gap-5">
        <img className="h-[80px] w-[80px]" src={img} />
        <div className="flex flex-col text-sm gap-1">
            <div className="font-bold">{title}</div>
            <div className="text-xs">{content}</div>
        </div>
    </div>)
}

export default function BrandPositioning() {
    const pinkBackground = { backgroundColor: "#f64697" }
    const bottom = [{
        image: bottom1,
        title: "Scientifically Backed",
        content: "Clinically proven ingredients sourced from across the globe",
    },
    {
        image: bottom2,
        title: "Smart Formulations",
        content: "World class formulas with in house proprietary formulations",
    },
    {
        image: bottom3,
        title: "Transparent Labels",
        content: "Clear labels and claims that you can read and comprehend",
    },
    {
        image: bottom4,
        title: "Efficacious Formulas",
        content: "Targeted action and visible, tangible results within weeks",
    },
    {
        image: bottom5,

        title: "Affordable & Reliable",
        content: "Unbloated pricing, with ethical & affordable product range",
    },
    {
        image: bottom6,
        title: "Safe Results",
        content: "We are partners in your skincare journey, your skin's best friends",
    },]

    const bottomComponents = bottom.map((item) => <BottomProps img={item.image} title={item.title} content={item.content} />)
    return <div className="">
        <div className="p-10 flex justify-between items-center">
            <div className="text-[80px] font-extrabold">Brand Positioning</div>
            <img className="h-6 w-24" src={rightArrow} />
        </div>
        <div style={pinkBackground} className="flex justify-around items-center p-10">
            <div className="text-[100px]  leading-none font-bold text-white">No nonsense
                just good Skin.</div>
            <img className="h-[300px] pr-32" src={chart} />
        </div>
        <div className="flex p-10 gap-12">
            {bottomComponents}
        </div>
    </div>
}