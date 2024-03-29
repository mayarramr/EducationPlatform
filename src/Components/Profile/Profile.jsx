import React , {PureComponent} from 'react';
import Style from './Profile.module.css'; 
import LeftProfile from '../LeftProfile/LeftProfile';
import MiddleProfile from '../MiddleProfile/MiddleProfile';
import RightProfile from '../RightProfile/RightProfile';
import { Helmet } from 'react-helmet';






export default function Profile() {
        return <>
<Helmet>
        <title>Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <div className="container mt-5 pt-5">
           <div className="row justify-content-between">
           <div className="col-md-2 p-0">
           <LeftProfile />
           </div>
           <div className="col-md-7">
           <MiddleProfile />
           </div>
           <div className="col-md-2">
            <RightProfile />
           </div>
           </div>
        </div>
           
        </>
      
    
}
