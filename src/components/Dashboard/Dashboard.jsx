import React, { useEffect, useState } from 'react'
import { ADMIN_USER, CLINIC_ADMIN_USER, USER_DATA, USER_TYPE } from '../../constants/const'
import { getFromLocalStorage } from '../../Helpers/localStorageHelper'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';


const InterbranchAdminHome = React.lazy(() => import("../../pages/InterbranchAdmin/InterbranchAdminHome"));
const MobileDashboardPage = React.lazy(() => import("../../pages/MobileDashboard"));


function Dashboard() {

    const [userType, setUserType] = useState()

    let history = useHistory()

    useEffect(() => {
        checUser()
    }, [])

    let checUser = async () => {

        getFromLocalStorage(USER_DATA).then(res => setUserType(JSON.parse(res).userType))

    }

    const isSessionActive = useSelector(
        (state) => state.login.isSessionActive
    );

    const userData = useSelector(
        (state) => state.login.user
    );

    useEffect(() => {


        if (!isSessionActive || !userData.token) {
            history.push("/sessionExpired")
        }


    }, [isSessionActive, userData])



    if (userType === ADMIN_USER || userType === CLINIC_ADMIN_USER) {
        return <InterbranchAdminHome />
    }
    else {

        return <MobileDashboardPage />
    }


}

export default Dashboard