import { Grid } from "@material-ui/core"
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import '../css/DisplayUserInformation.css'
import React, { useEffect, useState } from "react"

export default function DisplayUserInformation(props) {
  const [userSelected, setUserSelected] = useState(false);
  
  const appointmentListItem = props.data.appointmentDateRequest ? props.data.appointmentDateRequest.map((date) =>
    <li className="appointmentListItem">{date}</li>
  ) : [];

  const surveryResponsesListItem = props.data.surveryResponses ? props.data.surveryResponses.map((answer, index) =>
    <li className="surveyListItem">
      <span style={{ marginRight: '20px', width: '20px'}}>{index+1}:</span>
      <span >{answer}</span>
    </li>
  ) : [];

  function handleClose() {
    props.callback({})
  }

  function handleName() {
    var providedName = "";
    if (props.data.firstName) {
      providedName += props.data.firstName;
    }

    if (props.data.lastName) {
      providedName += " " + props.data.lastName;
    }

    return providedName
  }

  useEffect(() => {
    console.log("LOGGIN")
    console.log(props)
    console.log(props.data)
    console.log(Object.keys(props.data).length)
    if (Object.keys(props.data).length != 0) {
      setUserSelected(true);
    }
    else {
      setUserSelected(false);
    }

    console.log("selected bool: " + userSelected)
  }, [props.data])

  return (
    <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">

      <Grid container item xs={3}>
        { userSelected ? (<div className="profilePicture" hidden>
          <FaUserAlt size="5rem" color="gray"/>
        </div>) : null }
      </Grid>

      <Grid container item xs={8}>

        <div className="information">
          <div className="fieldRow">
            <span className="fieldKey">Name:</span>
            <span className="fieldValue">{handleName()}</span>
          </div>

          <div className="fieldRow">
            <span className="fieldKey">Email:</span>
            <span className="fieldValue">{props.data.email}</span>
          </div>

          <div className="fieldRow">
            <span className="fieldKey">Date of Birth:</span>
            <span className="fieldValue">{props.data.birthDay}</span>
          </div>

          <div className="fieldRow">
            <span className="fieldKey">Gender:</span>
            <span className="fieldValue">{props.data.gender}</span>
          </div>

          <div className="fieldRow">
            <span className="fieldKey">Legal Guardian:</span>
            <span className="fieldValue">{props.data.guardian}</span>
          </div>

          <div className="fieldRow">
            <span className="fieldKey">Mailing Address:</span>
            <span className="fieldValue">{props.data.mailing}</span>
          </div>

          <div className="fieldRow">
            <span className="fieldKey">Medical Insurance Center:</span>
            <span className="fieldValue">{props.data.medicalCenter}</span>
          </div>

          <div className="fieldRow">
            <span className="fieldKey">Primary Care Provider:</span>
            <span className="fieldValue">{props.data.provider}</span>
          </div>
        </div>
      </Grid>
      <Grid container item xs={1}>
        <div className="closeButton">
            <AiOutlineCloseSquare color="gray" size="25px" strokeWidth="3rem" onClick={handleClose}/>
        </div>
      </Grid>
        <Grid container item xs={6}>
          <div className="sectionTitle">
            { appointmentListItem.length ? <h2>Requested Appointment Dates</h2> : null }
          </div>
          <div className="appointments">
            <ul className="list">
              {appointmentListItem}
            </ul>
          </div>
        </Grid>
        <Grid container item xs={6}>
          <div className="sectionTitle">
            { surveryResponsesListItem.length ? <h2>Submitted Survey Responses</h2> : null }
          </div>
          <div className="questionnaire">
            <ul className="list">
              {surveryResponsesListItem}
            </ul>
          </div>
        </Grid>
    </Grid>
  )
}