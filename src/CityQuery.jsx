import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const JOBS_BY_CITY = gql`{
    cities {
      name
    jobs{
    title
    applyUrl
    description
    company{
      name
      websiteUrl
    }
    }
    }
    }`;

export default function JobsByCity() {
  const { loading, error, data } = useQuery(JOBS_BY_CITY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
      data.cities.map((city, id) =>
      <div>
  <h2 key={id}>{city.name}</h2>
    {data.cities[id].jobs.map((job, id) => {
        return(
            <>
            <h3 key={id}>{job.title}</h3>
            <h5>Company: {job.company.name}</h5>
            <p>{job.description}</p>
            <a href={job.applyUrl}>Apply on Company Website</a>
            </>
            )
    }
)}
</div>
  ))
}