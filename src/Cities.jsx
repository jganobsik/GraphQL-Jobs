import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class Cities extends Component {
    <Query query={gql`
    query JobsByCity{
        cities {
          name
        jobs{
        title
        applyUrl
        company{
          name
          websiteUrl
        }
        }
      }
    }
    `
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
