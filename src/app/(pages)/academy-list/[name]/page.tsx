import React from 'react'

interface CourseDetailsProps {
    params: {
      [key: string]: string; // or define specific keys like `id: string`
    };
    searchParams: {
      [key: string]: string | string[] | undefined; // or use URLSearchParams
    };
  }
  
   const  CourseDetails: React.FC<CourseDetailsProps> = ({ params, searchParams }) => {
     return (
    <div>page</div>
  )
}
export default CourseDetails;