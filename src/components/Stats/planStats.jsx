export default function PlanStats({
    price,
    content,
    devices,
    cancel,
    hdr,
    dolby,
    adFree,
    offline,
    sharing
}){
    return(
        <div className="plan-container">
            <div className="group-stats">
                <p>
                    Price<br />
                    <span>${price}/Month</span>
                </p>
                <p>
                    Free Trail<br />
                    <span>7 Days</span>
                </p>
            </div>
            <p>
                Content<br />
                <span>{content}</span>
            </p>
            <p>
                Devices<br />
                <span>{devices}</span>
            </p>
            <div className="group-stats">
                <p>
                    Cancel Anytime<br />
                    <span>{cancel}</span>
                </p>
                <p>
                    HDR<br />
                    <span>{hdr}</span>
                </p>
            </div>
            <div className="group-stats">
                <p>
                    Dolby Atmos<br />
                    <span>{dolby}</span>
                </p>
                <p>
                    Ad-Free<br />      
                    <span>{adFree}</span>
                </p>
            </div>
            <div className="group-stats">
                <p>
                    Offline Viewing<br />
                    <span>{offline}</span>
                </p>
                <p>
                    Family Sharing<br />
                    <span>{sharing}</span>
                </p>
            </div>
        </div>
    )
}