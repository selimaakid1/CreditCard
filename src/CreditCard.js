import React, { Component } from 'react'


class CreditCard extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            nbr: "",
            vld: "",
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
  
    render() {
        var regexCard = /^[0-9]+$/g;
        var regexName= /^[a-zA-Z ]+$/
        var regexVld = /^\d{2}\/\d{2}$/
        return (
            <div>
                <div className='creditCard'>
                    <h3 className='creditCardTitle'>Company Name</h3>
                    <div className='creditCardImg'>
                        <img src="https://img.icons8.com/officel/80/000000/sim-card-chip.png" />
                    </div>
                    <div className='creditCardItems'>
                        <div className='creditCardText'>
                            <h3 className='creditCardNbr'>
                                {regexCard.test(this.state.nbr) && this.state.nbr.toString().padEnd(16,'*').replace(/(.{4})/g , "$1 ")}
                            </h3>
                            <h3 className='creditCardVld'>
                                { regexCard.test(this.state.vld) && this.state.vld.replace(/(.{2})/ , "$1 / ")}
                        </h3>
                            <h2 className='creditCardName'>
                                {regexName.test(this.state.name) && this.state.name.toUpperCase()}
                            </h2>
                        </div>
                        <div className='creditCardLogo'>
                            <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fsteveolenski%2Ffiles%2F2016%2F07%2FMastercard_new_logo-1200x865.jpg" width='100%' />
                        </div>
                    </div>
                </div>
                <div className='inputs'>
                    <input type="text" value={this.state.name} name="name" placeholder="Enter your Name" maxLength={20} onChange={this.handleChange}/>
                    <br/>
                    <input type="text" value={this.state.nbr} name="nbr" placeholder="**** **** **** ****" maxLength={16} onChange={this.handleChange} />
                    <br/>
                    <input type="text" value={this.state.vld} name="vld" placeholder="MM/YY" maxLength={4} onChange={this.handleChange} />
                </div>
            </div>

        )
    }
}

export default CreditCard