import React from  'react';
import  gql from "graphql-tag";
import { graphql } from 'react-apollo';

const  query=gql`
query queryPost($id: Int!){
    post(id: $id) {
      titulo
      categoria {
        title
        description
      }
      
      autor
      fulltext2
    }
}` 

class Post extends React.Component{
    render() {
        let { data } = this.props
        if (data.loading){
            return <div>Loading...</div>
        }

        return (
            //console.log(data)
            <div className="card"> 
                <h1>{data.post.titulo}</h1>
                <p>{data.post.fecha}</p>
                <h2>{data.post.categoria.title}</h2>
                <p>{data.post.autor}</p>
                <p>{data.post.fulltext2}</p>
            </div>
            
        )
         
    }
}

const queryOptions = {
    options : props => ({
        variables:{
            id : props.match.params.id,
        },
    }),
}

Post = graphql(query, queryOptions)(Post)
export default Post