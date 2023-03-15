function BottomProps({ num, title, content }) {
    return (<div className="flex flex-col gap-5">
        <img className="h-[80px] w-[80px]" src={`src/assets/BrandingImages/bottom${num}.jpg`} />
        <div className="flex flex-col text-sm gap-1">
            <div className="font-bold">{title}</div>
            <div className="text-xs">{content}</div>
        </div>
    </div>)
}

export default function BrandPositioning() {
    const pinkBackground = { backgroundColor: "#f64697" }
    const bottom = [{
        title: "Scientifically Backed",
        content: "Clinically proven ingredients sourced from across the globe",
    },
    {
        title: "Smart Formulations",
        content: "World class formulas with in house proprietary formulations",
    },
    {
        title: "Transparent Labels",
        content: "Clear labels and claims that you can read and comprehend",
    },
    {
        title: "Efficacious Formulas",
        content: "Targeted action and visible, tangible results within weeks",
    },
    {
        title: "Affordable & Reliable",
        content: "Unbloated pricing, with ethical & affordable product range",
    },
    {
        title: "Safe Results",
        content: "We are partners in your skincare journey, your skin's best friends",
    },]

    const bottomComponents = bottom.map((item, i) => <BottomProps num={i + 1} title={item.title} content={item.content} />)
    return <div className="">
        <div className="p-10 flex justify-between items-center">
            <div className="text-[80px] font-extrabold">Brand Positioning</div>
            <img className="h-6 w-24" src="src/assets/BrandingImages/Right_Arrow.jpg" />
        </div>
        <div style={pinkBackground} className="flex justify-around items-center p-10">
            <div className="text-[100px]  leading-none font-bold text-white">No nonsense
                just good Skin.</div>
            <img className="h-[300px] pr-32" src="src/assets/BrandingImages/Chart.jpg" />
        </div>
        <div className="flex p-10 gap-12">
            {bottomComponents}
        </div>
    </div>
}