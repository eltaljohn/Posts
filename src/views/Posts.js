import React from "react";
import { Link } from "react-router-dom";
import  gql from "graphql-tag";
import { graphql } from 'react-apollo';

const  query=gql`{
    posts {
        count
        rows {
            id
            titulo  
            imagen_intro
            introtext
        }
    }
}`

class Posts extends React.Component{
    render(){
        let { data } = this.props;
        if (data.loading){
            return <div>Loading...</div>
        }

        return (
            <div>
                { data.posts.rows.map((item, index) =>    (
                    
                    <div className="card" style={{'width': '30rem'}} key={item.id}>
                        <img className="card-img-top" src={`https://www.elcincocero.com/${item.imagen_intro}`}  width={500} height={300} mode='fit' />
                        <div class="card-body">
                            <h5 class="card-title">{item.titulo}</h5>
                            <p class="card-text">{item.introtext}</p>
                            <Link to={`/post/${item.id}/`} className="btn btn-primary">Ver detalle</Link>                           
                        </div>
                    </div>                    
                ))}
            </div>                
        )
    }
}

Posts = graphql(query)(Posts)
export default Posts




