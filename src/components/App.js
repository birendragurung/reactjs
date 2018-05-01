import {Component} from 'react'
import {SkiDayList} from "./SkiDayList";
import {SkiDayCount} from "./SkiDayCount";
import {AddDayForm} from "./AddDayForm";
export class App extends Component {
    constructor() {
        super();

        this.state = {
            allSkiDays: [
                {
                    resort: 'k  valley',
                    date: new Date('1/2/2023'),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: 'NewVille',
                    date: new Date('1/23/2023'),
                    powder: true,
                    backcountry: true
                },
                {
                    resort: 'Ski Town',
                    date: new Date('11/3/2023'),
                    powder: true,
                    backcountry: false
                },
            ]
        }
    }

    countDays(filter) {
        const {allSkiDays} = this.state;
        return allSkiDays.filter(
            (day) => (filter) ? day[filter] : day
        ).length;
    }

    render() {
        return (
            <div className="app">
                {(this.props.location.path === "/") ?
                    (<SkiDayCount total={this.countDays()}
                                 powder={this.countDays("powder")}
                                 backcountry={this.countDays("backcountry")}
                    />) :
                    (this.props.location.path === "/add-day") ?
                        (<AddDayForm /> ):
                        (<SkiDayList days={this.state.allSkiDays} />)
                }
            </div>
        )
    }
}