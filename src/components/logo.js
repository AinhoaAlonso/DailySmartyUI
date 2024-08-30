import React, {Component} from "react";


export default class Logo extends Component{
    render(){
        //Vamos a crear estilos online para que permita un tamaño personalizado utilizando el mismo logo pero de tamaño distintos
        const size = {
            //operador ternario con una condicion, si tiene la propiedad size asociada coja ese tamaño y si no que coja 105px
            height:this.props.size ? this.props.size : 105,
            width:this.props.size ? this.props.size : 105,
        }
        return(
            <div className="logo-main">
                <img  style={size} alt="Logo Daily Smarty" src="/assets/ds_circle_logo.png" />
            </div>
        )
    }
}