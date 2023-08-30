import './gameCard.css'
import PropTypes from "prop-types";
import {options} from "../assets/functions";
import {whiteStyle} from "../assets/themeStyles";
import {darkStyle} from "../assets/themeStyles";



export default function GameCard(props) {
    const color = props.theme;
    return (
        <div>
            {color !== 'dark' ? (

                <div className={'schedule'} style={{backgroundImage: whiteStyle}}>
                    <div className={'teams'}>

                        <div className={'firstTeam'} style={{color: 'black'}}>
                            <div>
                                <img className={'image-1'} src={require(`./../assets/logo/${props.firstTeamInfo}.png`)}
                                     alt=""/>

                            </div>
                            <div>
                                <p>{props.firstTeamInfo}</p>
                            </div>

                        </div>

                        <div className={'secondTeam'} style={{color: 'black'}}>

                            <img className={'image-2'} src={require(`./../assets/logo/${props.secondTeamInfo}.png`)} alt=""/>
                            <p>{props.secondTeamInfo}</p>

                        </div>

                    </div>

                    <div className={'info'} style={{color: 'black'}}>
                        <div className={'score'} >{props.score}</div>
                        <div className={'dateTime'} >{new Date(props.dateTime).toLocaleString('en-GB',options)}</div>
                    </div>

                </div>
            ) : (
                <div className={'schedule'} style={{backgroundImage: darkStyle}}>
                    <div className={'teams'}>

                        <div className={'firstTeam'} style={{color: 'white'}}>
                            <div>
                                <img className={'image-1'} src={require(`./../assets/logo/${props.firstTeamInfo}.png`)}
                                     alt=""/>

                            </div>
                            <div>
                                <p>{props.firstTeamInfo}</p>
                            </div>

                        </div>

                        <div className={'secondTeam'} style={{color: 'white'}}>

                            <img className={'image-2'} src={require(`./../assets/logo/${props.secondTeamInfo}.png`)} alt=""/>
                            <p>{props.secondTeamInfo}</p>

                        </div>

                    </div>

                    <div className={'info'}>
                        <div className={'score'} style={{color: 'white'}}>{props.score}</div>
                        <div className={'dateTime'} style={{color: 'white'}}>{new Date(props.dateTime).toLocaleString('en-GB',options)}</div>

                    </div>

                </div>
            )}

        </div>

    )

}


GameCard.propTypes = {
    firstTeamInfo: PropTypes.oneOf(['Chornomorets', 'Dnipro-1', 'Dynamo', 'Kolos', 'Kryvbas', 'LNZ', 'Metalist 1925', 'Mynai', 'Obolon', 'Oleksandriya', 'Polissya', 'Rukh', 'Shakhtar', 'Veres', 'Vorskla', 'Zorya']),
    secondTeamInfo: PropTypes.oneOf(['Chornomorets', 'Dnipro-1', 'Dynamo', 'Kolos', 'Kryvbas', 'LNZ', 'Metalist 1925', 'Mynai', 'Obolon', 'Oleksandriya', 'Polissya', 'Rukh', 'Shakhtar', 'Veres', 'Vorskla', 'Zorya']),
    dateTime: PropTypes.instanceOf(Date),
    score: PropTypes.string,
    theme: PropTypes.oneOf(["dark", "light"])
}

//
// export default GameCard;