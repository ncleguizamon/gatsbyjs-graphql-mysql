import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <div>
      <h1>Index page</h1>
      <h4>{data.allEmployees.totalCount} Posts</h4>
      {data.allEmployees.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
          {node.id} <span>— {node.name}</span>
          </h3>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allEmployees {
      edges {
        node {
          id
          name
        }
      }
  },
    allCompras{
    edges{
      node{
        NombreCompra
      }
    }
  }
  }
`
