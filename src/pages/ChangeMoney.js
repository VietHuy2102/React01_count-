import React from "react";
const scaleName = {
    v:"Vnd",
    u:"Usd"
}

class InputMoney extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.onmoneyChange(e.target.value)
    }
    render() {
        const money = this.props.money;
        const scale = this.props.scale;
        return(
            <form action="" className={scaleName[scale]}>
                <p>Enter money in {scaleName[scale]}:</p>
                <input
                    placeholder={scaleName[scale]}
                    value={money}
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}

function toVnd(Usd){
    return (Usd/23000)
}
function toUsd(Vnd){
    return (Vnd*23000)
}
function Convert(money,convert){
    const input = parseFloat(money)
    if (Number.isNaN(input)){
        return ""
    }
    const output = convert(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString()
}

class ChangeMoney extends React.Component{
    constructor(props) {
        super(props);
        this.handleVndChange = this.handleVndChange.bind(this)
        this.handleUsdChange = this.handleUsdChange.bind(this)
        this.state ={money:"",scale:""}
    }
    handleVndChange(money){
   this.setState({scale:"v",money})
}
    handleUsdChange(money){
        this.setState({scale:"u",money})
    }

    render() {
        const scale = this.state.scale
        const money = this.state.money
        const vnd = scale ==="u"?Convert(money,toVnd):money
        const usd = scale ==="v"?Convert(money,toUsd):money
        return (
            <div className="container input-group-mb3">
                <InputMoney
                    scale="v"
                    money={vnd}
                    onmoneyChange={this.handleVndChange}
                />
                <InputMoney
                    scale="u"
                    money={usd}
                    onmoneyChange={this.handleUsdChange}
                />
            </div>
        );
    }
}
export default ChangeMoney