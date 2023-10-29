import React from 'react'
import { NotifData, UserCardData, PendingData } from "../../data/mockAlumniData";
import UserCard from '../../components/alumni-company/UserCard';
import JobContent from '../../components/alumni-company/JobContent';
import ApplyJobPage from '../../components/alumni-company/ApplyJobPage';

const A_ApplyJob = () => {
    const user = UserCardData[0];
    const pending = PendingData[0];
    const notif = NotifData[0];
    console.log("data", notif);

    return (
        <div className='bg-slate-100 min-h-screen'>
            <div className='container mx-auto flex flex-col sm:flex-row py-4 gap-2'>

                <div className="sm:w-[25%] gap-2">
                    <UserCard data={user} />
                </div>

                <div className='sm:w-[50%] space-y-2'>
                    <ApplyJobPage />

                </div>

                <div className='sm:w-[25%]'>
                    <JobContent data={pending} />
                </div>

            </div>
        </div>
    )
}

export default A_ApplyJob