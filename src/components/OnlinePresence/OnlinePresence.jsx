import companies from "../../assets/OnlinePresenceImages/Companies2.png"
import companies2 from "../../assets/OnlinePresenceImages/Companies.png"
import line from "../../assets/OnlinePresenceImages/Line.png"
export default function OnlinePresence() {
    return (<div className="flex p-10 h-screen">
        <div className="text-start">
            <div className="text-[60px] font-extrabold">Online Presence</div>
            <img src={companies2} />
        </div>
        <img src={line} />
        <div className="flex flex-col">
            <div className="text-[32px] font-extrabold w-5/6 text-start px-10">Launching soon on</div>
            <img width={260} height={300} src={companies} />
        </div>
    </div>)
}