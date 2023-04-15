// import { Skeleton } from '@mui/material';
import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonLoder = (props) => (
  <>
    {/* <Skeleton variant="circular" width="50" height="50" animation="wave"/> */}
    {/* <Skeleton variant="rounded" animation="wave" width={210} height={50} /> */}
    {/* <Skeleton variant="rounded" animation="wave" width={210} height={50} /> */}

{/* <Skeleton variant="circular" width={80} height={80} /> */}
{/* <Skeleton variant="text" sx={{ fontSize: '1rem',width:'130px' }} /> */}
{/* <Skeleton variant="text" sx={{ fontSize: '1rem',width:'180px' }} /> */}
{/* <Skeleton variant="rounded" width={210} height={60} /> */}
<ContentLoader/>
 
  </>

)

export default SkeletonLoder

