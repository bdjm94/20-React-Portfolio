import React from 'react'
import './style.css'

export default class About extends React.Component {
  state = {
    name: '',
    species: '',
    occ: '',
    disp: '',
    background: ''
  }
  text = {
    name: 'Brendan Moore',
    role: 'Full Stack Developer',
    background: `I'm a full stack developer with experience in front-end and back-end developement, currently based in Brisbane, Australia. 
    My interest in full stack development came about during University, where I was able to learn and try developing as a subject. 
    During the Covid lockdown period, it allowed me to continue my passion to learn about full stack developement, and now, I am open to opportunities`
  }

  componentDidMount (){
    let count = 1
    for (const key in this.text) {
      setTimeout(() => this.showText(key), count * 1300)
      count++
    }
  }

  showText = (key) => {
    let count = 0
    const length = this.text[key].length
    let speed = length < 30 ? 50 : 5
    let timer = setInterval(() => {
      this.setState({[key]: this.text[key].substr(0, count)})
      count++
      if (count > this.text[key].length) {
        clearInterval(timer)
      }
    }, speed)
  }

  render() {
    return (
      <div className='content' id='about'>
        <div>
          <p><bdi className='about-headers'>Name:</bdi> {this.state.name}</p>
          <p><bdi className='about-headers'>Role:</bdi> {this.state.role}</p>
          <p><bdi className='about-headers'>Background: </bdi> {this.state.background}
          </p>
        </div>
      </div>
    )
  }
}