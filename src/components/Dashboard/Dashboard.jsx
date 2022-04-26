import React, { useEffect, useState } from 'react'
import { ADMIN_USER, USER_TYPE } from '../../constants/const'
import { getFromLocalStorage } from '../../Helpers/localStorageHelper'


const InterbranchAdminHome = React.lazy(() => import("../../pages/InterbranchAdmin/InterbranchAdminHome"));
const MobileDashboardPage = React.lazy(() => import("../../pages/MobileDashboard"));

function Dashboard() {

    const [userType, setUserType] = useState()

    useEffect(() => {
        checUser()
    }, [])

    let checUser = async () => {


        getFromLocalStorage(USER_TYPE).then(res => setUserType(res))

    }


    if(userType===ADMIN_USER)
    {
        return <InterbranchAdminHome/>
    }
    else{

        return <MobileDashboardPage/>
    }

  
}

export default Dashboard