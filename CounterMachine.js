import React, { Component } from 'react'

export default class CounterMachine extends Component {
    state = { total: 0, changeNumber: 0 }


    plus = () => {
        let newNumber
        newNumber = this.state.total + this.state.changeNumber
        this.setState({ total: newNumber, changeNumber: 0 })
        
    }
    minus = () => {
        let newNumber
        newNumber = this.state.total - this.state.changeNumber
        this.setState({ total: newNumber, changeNumber: 0 })
        
    }
    toMultiply=()=>{
        let newNumber
        let total=this.state.total
        if (total===0){total=1}
        newNumber =  total * this.state.changeNumber
        this.setState({ total: newNumber, changeNumber: 0 })
    }
    toDivide=()=>{
        let newNumber
        let total=this.state.total
        if (total===0){newNumber=this.state.changeNumber} else{newNumber =  total / this.state.changeNumber}
        
        this.setState({ total: newNumber, changeNumber: 0 })
    }
    numberOnclick = (number) => {

        
            let changeNumber = this.state.changeNumber
            let newNumber = changeNumber * 10 + number
            this.setState({ changeNumber: newNumber })
        

    }
    getNumber = (number) => {
        switch (number) {
            case 0:
                {
                    let changeNumber = this.state.changeNumber
                    if (changeNumber === 0) {

                    } else {
                        var newNumber = changeNumber * 10 + number
                        this.setState({ changeNumber: newNumber })
                    }
                }
                return;

             default:
                 this.numberOnclick(number)
                return;

        }
    }
 
    render() {
       
        return (
            <div>
                
                <h1>total={this.state.total}</h1>
                <br></br>
                <h1>{this.state.changeNumber}</h1>
                <table>
                    <tbody >
                        <tr>
                            <td><button onClick={() => this.getNumber(7)}>7</button></td>
                            <td><button onClick={() => this.getNumber(8)}>8</button></td>
                            <td><button onClick={() => this.getNumber(9)}>9</button></td>
                            <td><button onClick={()=>this.toDivide()}>/</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.getNumber(4)}>4</button></td>
                            <td><button onClick={() => this.getNumber(5)}>5</button></td>
                            <td><button onClick={() => this.getNumber(6)}>6</button></td>
                            <td><button onClick={()=>this.toMultiply()}>x</button></td> 
                        </tr>
                        <tr>
                            <td><button onClick={() => this.getNumber(1)}>1</button></td>
                            <td><button onClick={() => this.getNumber(2)}>2</button></td>
                            <td><button onClick={() => this.getNumber(3)}>3</button></td>
                            <td><button onClick={() => this.plus()}>+</button></td>
                        </tr>
                        <tr>
                        <td></td>
                        <td><button onClick={() => this.getNumber(0)}>0</button></td>
                        <td></td>
                        <td><button onClick={() => this.minus()}>-</button></td>
                        </tr>
                    </tbody>
                </table>
                
                
                
                
               
            </div>
        )
    }
}
