function ImagePrice({ title, src, value }) {
    return (<div>
        <img src={src} />
        <div>
            <div>{title}</div>
            <div>{value}</div>
        </div>
    </div>)
}

export default function KeyMetrics() {
    return (<div className=" grid grid-cols-2 grid-rows-2">
        <div className="col-start-1 col-end-2 row-start-1 row-end-3 flex items-center flex-col font-extrabold text-xl gap-5">
            <div className="text-[75px] font-bold pt-20 pb-14">Key Metrics</div>
            <div className="flex items-center gap-10">
                <ImagePrice src="src/assets/MetricsImages/image1.png" title={"Average Order"} value={"Value: ₹500/-"} />
                <ImagePrice src="src/assets/MetricsImages/image2.png" title={"Customer Acquisition"} value={"Cost: ₹150/-"} />
                <ImagePrice src="src/assets/MetricsImages/image3.png" title={"Customer Lifetime"} value={"Value: 2000/-"} />
            </div>
            <div className="flex  items-center gap-16">
                <ImagePrice src="src/assets/MetricsImages/image4.png" title={"Average Order"} value={"Value: ₹500/-"} />
                <ImagePrice src="src/assets/MetricsImages/image5.png" title={"Average Order"} value={"Value: ₹500/-"} />
            </div>
            <div className="flex  items-center gap-10">
                <ImagePrice src="src/assets/MetricsImages/image6.png" title={"Average Order"} value={"Value: ₹500/-"} />
                <ImagePrice src="src/assets/MetricsImages/image7.png" title={"Average Order"} value={"Value: ₹500/-"} />
                <ImagePrice src="src/assets/MetricsImages/image8.png" title={"Average Order"} value={"Value: ₹500/-"} />
            </div>
        </div>
        <div className="row-start-1 flex items-center justify-center flex-col text-white row-end-2 col-start-2 col-end-3 bg-black gap-4">
            <div className="text-center text-3xl font-bold">Scalable & Sustainable Business</div>
            <p className="text-2xl px-24">An "always +ve" bottom line
                approach with rapid growth to scale
                responsibly & sustainably over the
                next five years</p>
        </div>
        <img src="src/assets/MetricsImages/Stats.jpg" />
    </div>)
} 