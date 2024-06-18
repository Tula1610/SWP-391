import "./widgetSm.css"
import { MdOutlineVisibility } from "react-icons/md";


export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="./assets/imgs/meow4.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">BeBeSapDiBin</span>
                        <span className="widgetSmUserTitle">Leader</span>
                    </div>
                    <button className="widgetSmButton">
                        <MdOutlineVisibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="./assets/imgs/meow4.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">BeBeSapDiBin</span>
                        <span className="widgetSmUserTitle">Leader</span>
                    </div>
                    <button className="widgetSmButton">
                        <MdOutlineVisibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="./assets/imgs/meow4.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">BeBeSapDiBin</span>
                        <span className="widgetSmUserTitle">Leader</span>
                    </div>
                    <button className="widgetSmButton">
                        <MdOutlineVisibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="./assets/imgs/meow4.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">BeBeSapDiBin</span>
                        <span className="widgetSmUserTitle">Leader</span>
                    </div>
                    <button className="widgetSmButton">
                        <MdOutlineVisibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="./assets/imgs/meow4.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">BeBeSapDiBin</span>
                        <span className="widgetSmUserTitle">Leader</span>
                    </div>
                    <button className="widgetSmButton">
                        <MdOutlineVisibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
