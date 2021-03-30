import './App.css';
import React,{Component} from 'react';
import ScheduleList from './ScheduleList'
import sample from './back.mp4';

class App extends Component{
  constructor(){
    super();
    const date = new Date();
    this.state = {
      date: date.toDateString(),
      day: date.getDay(),
      Time: date.toTimeString()
    }
  }
  OnClickChange = (event)=>{
      this.setState({day : event.target.id});
  }
  UpdateTime = ()=>{
      const new_date = new Date();
      this.setState({Time : new_date.toTimeString()});
  }
  componentDidMount(){
    setInterval(this.UpdateTime,1000);
  }
  render(){
    return (
      <div> 
        <video className='videoTag' autoPlay loop muted>
      <source src={sample} type='video/mp4' />
      </video>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="content">
      <a className="navbar-brand" href="#">2CO5</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" id = "1" href="#" onClick={this.OnClickChange}>MON</a>
          <a className="nav-item nav-link active" id="2" href="#" onClick={this.OnClickChange}>TUE</a>
          <a className="nav-item nav-link active" id="3" href="#" onClick={this.OnClickChange}>WED</a>
          <a className="nav-item nav-link active" id="4" href="#"onClick={this.OnClickChange}>THRU</a>
          <a className="nav-item nav-link active" id="5" href="#" onClick={this.OnClickChange}>FRI</a>
        </div>
      </div>
    </nav>
      <div className="d-flex bd-highlight"  id="disp">
      <div className="p-2 flex-fill bd-highlight w-100"id="time">
        <h1 className="display-1" id = "h1">{this.state.date}
        <h1 className="display-3">{this.state.Time.substr(0,17)}</h1>
        <h1 className="display-3">{this.state.Time.substr(18,21)}</h1></h1></div>
      <div className="p-3 flex-fill bd-highlight"id="list"><ScheduleList day={(this.state.day-1)%5}/></div>
    </div>
    </div>
    );
  }
}

export default App;
