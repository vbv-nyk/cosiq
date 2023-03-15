export default function OnlinePresence() {
    return (<div className="flex p-10 h-screen">
        <div className="text-start">
            <div className="text-[60px] font-extrabold">Online Presence</div>
            <img src="src/assets/OnlinePresenceImages/Companies.png" />
        </div>
        <img src="src/assets/OnlinePresenceImages/Line.png" />
        <div className="flex flex-col">
            <div className="text-[32px] font-extrabold w-5/6 text-start px-10">Launching soon on</div>
            <img width={260} height={300} src="src/assets/OnlinePresenceImages/Companies2.png" />
        </div>
    </div>)
}