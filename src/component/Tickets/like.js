import React, { Component } from 'react';

class Like extends Component {
    state = {
		count : 0
    }
    

    like = () => {
        let newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
      }

      render(){
          return (
              <td  className="column9" onClick={this.like}>%{this.state.count}</td>
          )
      }
}

export default Like;