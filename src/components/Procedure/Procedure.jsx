import girlHoldingTv from "../../assets/ProcedureImages/girlHoldingTV.jpg"
export default function Procedure() {
    const pinkBackground = { backgroundColor: "#f64697" }
    const pinkText = { color: "#f64697" }
    return (<section className="flex">
        <div className="flex flex-col justify-cente h-screen">
            <div style={pinkBackground} className="font-extrabold leading-none text-[80px] text-start w-[500px] pb-10 h-max">
                <div className="px-10 pt-20 text-white">How we are doin it</div>
                <img src={girlHoldingTv}
                    className="w-[500px] mt-10 relative left-[110px]" />
            </div>
        </div>
        <div className="p-36 pb-0 ml-12 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <div className="font-bold text-2xl">D2C+ Sales</div>
                <div className="text-lg">We are an Internet first brand present on all major
                    marketplaces & www.cosiq.com with planned
                    ominchannel distribution across the market (online,
                    traditional channels, modern trade etc)</div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold text-2xl">Knowledge based marketing</div>
                <div className="text-lg">{"Geared towards educating the end user instead of hardselling to convert them into loyal, repeat customers"}</div>
            </div>
            <div className="flex flex-col gap-2" >
                <div className="font-bold text-2xl">  Socially Charged DNA</div>
                <div className="text-lg">Promoted with relevant information and answering
                    questions about Why, When & How regarding skincare,
                    product usage, regimen, benefits etc.</div>
            </div>
            <div className="flex flex-col gap-2">
                <div style={pinkText} className="text-lg font-bold">We are building a community and empowering
                    customers with knowledge to make “Intelligent”
                    choices in skincare with unique IQC system.</div>
            </div>
        </div>
    </section>)
}