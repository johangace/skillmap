import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Skill = props => (
  <tr>
    <td>{props.skill.username}</td>
    <td>{props.skill.description}</td>
    <td>{props.skill.duration}</td>
    <td>{props.skill.date.substring(0,10)}</td>
    <td>
      <Link  to={"/edit/"+props.skill._id}>edit</Link> | <a href="#" onClick={() => { props.deleteSkill(props.skill._id) }}>delete</a>
    </td>
  </tr>
)

export default class SkillsList extends Component {
  constructor(props) {
    super(props);
    this.deleteSkill= this.deleteSkill.bind(this);
    this.state      = { skills: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/skills')
    .then(response => {
      this.setState({ skills: response.data})
    })
    .catch((error) => {
      console.log(error);
    })
  }

  deleteSkill(id) {
    axios.delete('http://localhost:5000/skills/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      skills: this.state.skills.filter(el => el._id !== id)
    })
  }

  skillList() {
    return this.state.skills.map(currentskill => {
      return <Skill skill={currentskill} deleteSkill={this.deleteSkill} key={currentskill._id}/>;
    })
  }
  render() {
    return (
      <div>
        <h3>Logged Skills</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.skillList() }
          </tbody>
        </table>
      </div>
    )
  }
}
