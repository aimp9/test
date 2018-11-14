import React from 'react';
import logo from './Vector.png';
import './App.css';
import ArticleList from './ArticleList';
import articles from './fixtures';

	
		
  function App (){
    return (
	<div className="body">
	 	    <div className="body_header"> 
                <div className="body_container">		  
		            <div className="body_container_left">  
                        <div className="body_container_logo">
                            <div className="body_container_logo_content">		                   	
                              <img src={logo} className="logo" alt="logo" />
			                </div>
					
			                <div className="body_container_logo">
			                    <div className="body_container_logo_title">
			                        <div className="body_container_logo_title_color">Репозиторий госуслуг
						            </div> Республики Коми
				                </div>
		                    </div> 		
		                </div>
		            </div>
		        </div>
			    <div className="body_container_title"> 
                    <div className="body_container_title_size">Госуслуги
					</div>		            
			    </div>
			 
            </div>	

        <div className="body_all_content">		 
		    <div className="body_container">
			  <ArticleList articles = {articles}/>
		    </div>
        </div>	
		
		<div className="body_footer">
		    <div className="body_container">	
			   <div className="body_container_left">
					     © ГАУ РК "ЦИТ". Все права защищены.			
			   </div>
		    </div>
		</div>
       
	</div>	
    );
  }


export default App;
