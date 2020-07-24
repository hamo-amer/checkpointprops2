import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
function ProfileComponent(props) {
    return (
        <div className="myProfile">
         <div className="imageProfile">{props.children}</div>
         <hr/>
        <div>
            <p>Full Name : {props.fullName}</p>
            <p>Bio : {props.bio}</p>
            <p>Profession : {props.profession}</p>
        </div>
        <button className="btn btn-primary" onClick={()=>props.handleName(props.fullName)}> alert name</button>

        </div>
    )
}
export default ProfileComponent;
//default Props
ProfileComponent.defaultProps={
    fullName:"name",
    bio:"bio",
    profession:"profession"
}
//Props Types
ProfileComponent.propTypes={
fullName:PropTypes.string,
bio:PropTypes.string,
profession:PropTypes.string
}