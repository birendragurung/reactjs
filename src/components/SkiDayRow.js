import Terrain from 'react-icons/lib/md/terrain'
import SnowFlakes from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import React from "react";
import {PropTypes} from "prop-types"

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
    <tr>
        <td>
            {date.getMonth() + 1}/{date.getDate()} / {date.getFullYear()}<Calendar />
        </td>
        <td>{resort}</td>
        <td>{(powder) ? <SnowFlakes /> : null}</td>
        <td>{(backcountry) ? <Terrain /> : null}</td>
    </tr>
)

SkiDayRow.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    powder: PropTypes.bool,
    backcountry: PropTypes.bool
}