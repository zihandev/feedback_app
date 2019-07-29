import React from 'react'
import Table from './Table'
import { FiPlus } from "react-icons/fi";
import {Link} from 'react-router-dom'


const Dashboard = () => {
    const style={
        width: '8rem',
        height: '8rem',
        alignItems : 'center',
        borderRadius : '50%',
        border: 'none',
        fontSize : '40px',
        backgroundColor : 'red',
        float: 'right',
        textAlign:'center',
        marginTop : '30rem',
        borderRadius : '100%',
        webkitShapeOutside: 'circle(50% at 50% 50%)',
        shapeOutside: 'circle(50% at 50% 50%)',
        webkitClipPath: 'circle(50% at 50% 50%)',
        clipPath: 'circle(50% at 50% 50%)',
        transform: 'translateX(-3rem) ',
        position: 'relative'
    }
    return (
        <div>
           <Table/>
           <button style={style}> <Link to='/forms'><FiPlus style={{ display:'flex',  alignSelf:'center', justifySelf:'center'}}/></Link></button>
        </div>
    )
}

export default Dashboard
