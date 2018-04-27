import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlakes from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import {PropTypes} from "prop-types"

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + "%");
}

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total / goal);
}

export const SkiDayCount = ({total = 10, powder = 40, backcountry = 40, goal = 20}) => (

    <div className="ski-day-count">
        <div className="total-days">
            <Calendar />

            <span>{total} days</span>
        </div>
        <div className="powder-days">
            <SnowFlakes />

            <span>{powder} powder</span>
        </div>
        <div className="backcountry-days">
            <Terrain />

            <span>{backcountry} hiking day</span>
        </div>
        <div>
            <span>
                {calcGoalProgress(total, goal)}
            </span>
        </div>
    </div>
)

SkiDayCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    background: PropTypes.number,
    goal: PropTypes.number

}