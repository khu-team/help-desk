import React from'react';
import './cities.js';
class city extends React.component{
    render(){
        const costumers=this.state.name.map(item,index) => 
        {
            return(
                <div>

                    <h2>{item.name}</h2>

                </div>
                <h1> {item.cities.map((city) =>{
                    return(<li>/*city object*/</li>)}
                </h1>,
             )}

        }            
    }
});
