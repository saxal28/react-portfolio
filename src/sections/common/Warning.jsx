import React from "react"
import {WarningEnums} from "../../enums/warning-enums";

export class Warning extends React.Component {

    state = { warningState: null}

    componentWillMount() {

        setTimeout(() => {

            this.setState({warningState: WarningEnums.SlideOut})

        }, 1500)

        setTimeout(() => {

            this.setState({warningState: WarningEnums.SlideIn})

        }, 8500)


    }

    render() {

        const {text} = this.props
        const {SlideIn, SlideOut, Hide} = WarningEnums

        const {warningState} = this.state

        const warningStyle = warningState === SlideIn ? SlideIn : SlideOut

        return (

            <div className={`warning ${warningState}`}>

                <h4>{text}</h4>

            </div>

        )
    }
}





