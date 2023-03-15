function Bio({ name, professions, website, img }) {
    return (<section className="flex items-center gap-2">
        <img src={img} className="h-36" />
        <div>
            <div className="font-bold text-xl">{name}</div>
            <div className="text-xl">{professions.at(0)}</div>
            <div className="text-xl">{professions.at(1)}</div>
            <div className="text-xl">{professions.at(2)}</div>
            <div className="text-xl">{website}</div>
        </div>
    </section>)
}
export default function Founders() {
    const pinkBackground = { backgroundColor: "#f64697" }

    return (<section className="pt-20">
        <div style={pinkBackground} className="flex justify-center  items-center gap-52" >
            <div>
                <img className="h-60 relative bottom-[33px]" src="src/assets/FounderImages/Angad_Talwar.jpg" />
            </div>
            <div className="text-3xl font-extrabold relative bottom-[33px] text-white">Founders</div>
            <div>
                <img className="h-60 relative bottom-[33px]" src="src/assets/FounderImages/Kanika_Talwar.jpg" />
            </div>
        </div>
        <div style={pinkBackground} className="flex justify-center gap-32 mb-[-50px]">
            <div className="relative left-20 bottom-[64px]">
                <div className="text-end text-3xl pb-2 font-extrabold text-white">Angad Talwar</div>
                <div className="text-end text-xl text-white">SMU Dallas, Texas</div>
                <div className="text-xl text-white">15+ Experience in building brands,</div>
                <div className="text-end text-xl text-white">Ecommerce & D2C</div>
            </div>
            <div className="relative bottom-[64px]">
                <div className="pl-36 pb-2 text-3xl font-extrabold text-white"> Kanika Talwar</div>
                <div className="pl-36 text-xl text-white">MP University, IIM Bangalore NSRCEL</div>
                <div className="pl-36 text-xl text-white">Goldman Sachs 10K Women, 4+ years of</div>
                <div className="pl-36 text-xl text-white">Industry Brand & Manufacturing Experience</div>
            </div>
        </div>
        <div className="text-center font-bold text-white  text-lg ">Team Category Experience: 30+ years | Team Ecommerce / D2C Experience: 15+ years | Vertically Aligned Capabilities: From Factory to Customer</div>
        <div className="flex items-center mt-12 mb-10 justify-evenly">
            <div className="text-2xl font-bold w-40">Advisors & Investors</div>
            <Bio name="Anupam Mittal" img="src/assets/FounderImages/Anupam_Mittal.jpg" professions={["Angel Investor", "Founder & CEO,", "Shaadi.com"]} />
            <Bio name="Vineeta Singh" img="src/assets/FounderImages/Vineeta Singh.jpg" professions={["Angel Investor", "Cofounder & CEO,", "Sugar Cosmetics"]} />
            <Bio name="Deepak Jain" professions={["Manufacturer", "for A+ beauty &", "skincare brands"]} img="src/assets/FounderImages/Deepak_Jain.jpg" />
        </div>
        <div>
            <div style={pinkBackground} className="p-3 text-2xl font-bold text-white text-center">Experienced Manufacturing | R&D | Formulations | Operations | Marketing | Sales | D2C Growth</div>
        </div>
    </section >)
}