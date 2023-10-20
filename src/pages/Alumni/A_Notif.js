import React from 'react'

import UserCard from '../../components/alumni-company/UserCard';
import JobContent from '../../components/alumni-company/JobContent';
import NotifContent from '../../components/alumni-company/NotificationContent';


import { NotifData, UserCardData, PendingData } from "../../data/mockAlumniData";
import Search from '../../components/alumni-company/SearchBox';


function A_Notif() {
    const user = UserCardData[0];
    const pending = PendingData[0];
    const notif = NotifData[0];
    console.log("data", notif);


    return (
        <div className='bg-slate-100 min-h-screen'>
            <div className='container mx-auto flex flex-col sm:flex-row py-4 gap-2'>

                <div className="sm:w-[25%] gap-2">
                    <Search />
                    <UserCard data={user} />
                </div>

                <div className='sm:w-[50%] space-y-2'>
                    <NotifContent data={notif} />
                </div>

                <div className='sm:w-[25%]'>
                    <JobContent data={pending} />
                </div>

            </div>
        </div>
    )
}

export default A_Notif