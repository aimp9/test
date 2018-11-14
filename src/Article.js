import React, {Component} from 'react';
import './Article.css'
import './App.css';


class Article extends Component {
 state = {
  isOpen: false
}
render() {
  const {article} = this.props
  const style = {width:'100%'}
  const body = this.state.isOpen && <section>{ article.description }</section> 
 return(
      <div className="article" style={style}>
	     <div className="article mx-auto" style={style}>
	        <div className="article-header">		   
                <h2 className="article-header_left article-header_size">{ article.title }</h2>
		            <button onClick={this.handleClick} className="btn btn-lg float-right btn-secondary">
                        {this.state.isOpen ? 'Скрыть' : 'Посмотреть'}
                    </button>
	        </div>
		 </div>
	     <div className="article-body"> 
	        <h6 className="article-body-subtitle text-muted"></h6>
		      {body}
         </div>
      </div>
    );
}
handleClick=()=> {
  console.log('---', 'clicked')
  this.setState({
	  isOpen: !this.state.isOpen
  })
}
}

export default Article