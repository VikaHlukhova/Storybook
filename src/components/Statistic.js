import './statistic.css'
import PropTypes from "prop-types";
import {getDeg, getPercent} from "../assets/functions";
import {setColors} from "../assets/themeStyles";


function Statistic(props) {

    const type = props.type;
    const dataPercent = getPercent(props.firstTeamInfo, props.secondTeamInfo)
    const dataDeg = getDeg(props.firstTeamInfo, props.secondTeamInfo)
    console.log(setColors(dataDeg.firstPercent, props.colorFirst, props.colorSecond))
    return (
        <div className={'main'}>
            {type === 'line' ? (
                <div>


                    <div className="data">

                        <span id={'firstTeam'}>{props.firstTeamInfo}</span>
                        <span id={'param'}>{props.parameter}</span>
                        <span id={'secondTeam'}>{props.secondTeamInfo}</span>
                    </div>

                    <div className="container">

                        <div className="a"
                             style={{width: dataPercent.firstPercent + '%', backgroundColor: props.colorFirst}}></div>
                        <div className="b"
                             style={{width: dataPercent.secondPercent + '%', backgroundColor: props.colorSecond}}></div>
                    </div>
                </div>

            ) : (
                <div id={'container'}>

                    <div className={"row"}>
                        <div className="data-donut box">
                            <span id={'secondTeam'}>{props.secondTeamInfo}</span>
                            <span id={'param-circle'}>{props.parameter}</span>
                            <span id={'firstTeam'}>{props.firstTeamInfo}</span>

                        </div>
                        <div className={'container-donut box'}>

                            <div className="donut"
                                 style={{background: setColors(dataDeg.firstPercent, props.colorFirst, props.colorSecond)}}>
                                <div className="hole"></div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>


    )

}


Statistic.propTypes = {
    parameter: PropTypes.string,
    firstTeamInfo: PropTypes.number,
    secondTeamInfo: PropTypes.number,
    colorFirst: PropTypes.string,
    colorSecond: PropTypes.string,
    type: PropTypes.oneOf(["line", "circle"])
}

export default Statistic;