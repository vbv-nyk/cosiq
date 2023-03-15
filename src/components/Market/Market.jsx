import bpc from "../../assets/MarketImages/bpc_worldwide.png"
import india from "../../assets/MarketImages/indian_skincare.png"
import skincare from "../../assets/MarketImages/skincare_worldwide.png"

export default function Market() {
    const pinkBackground = { backgroundColor: "#f64697" }
    return (<main className="h-screen grid grid-cols-2 grid-rows-1">
        <section className="flex flex-col gap-5 justify-start py-10 px-[60px] col-start-1 col-end-2">
            <h1 className="text-[80px] font-extrabold">Market</h1>
            <p className="text-[30px] leading-tight w-full">The worldwide Beauty & Personal Care
                market is a <span className="font-bold">$580 Billion</span> behemoth out
                of which Indian skincare market is
                worth <span className="font-bold">$7.6 Billion</span></p>
            <p className="text-[30px] leading-tight w-full">
                The industry is growing with a fast
                changing landscape in India and there is
                high acceptance and love towards new
                age, <span className="font-bold">scientifically backed</span> skincare
                brands amongst the <span className="font-bold">genZ market.</span>
            </p>
            <svg viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right-arrow</title> <desc>Created with Sketch.</desc> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-400.000000, -150.000000)" fill="#252528" fill-rule="nonzero"> <g id="square-filled" transform="translate(50.000000, 120.000000)"> <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z" id="right-arrow"> </path> </g> </g> </g> </g></svg>
        </section>
        <section style={pinkBackground} className="flex flex-col col-start-2 col-end-3">
            <div className="flex p-5 gap-2 justify-center">
                <img src={bpc} />
                <img src={india} />
                <img src={skincare} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-3xl w-[500px] text-white py-5 mx-auto font-bold">Indian Skincare Industry (TAM) is
                    growing at a CAGR of 9.5%</div>
                <section className="flex flex-col gap-2">
                    <p className="text-xl w-[550px] text-white mx-auto">A paradigm shift in the market with a huge upsurge
                        in the demand for skincare that is based on Active
                        Molecules with proven, scientific results
                    </p>
                    <p className="text-xl w-[550px] text-white  mx-auto">
                        CosIQ is geared to gain a sizeable market share
                        while sustaining accelerated growth for the next five
                        years becoming a market leader
                    </p>
                </section>
            </div>
        </section>
    </main>)
}