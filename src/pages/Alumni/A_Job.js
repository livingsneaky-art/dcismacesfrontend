import React from 'react'
import ViewJob from '../../components/alumni-company/ViewJob'
import { JobData } from '../../data/mockAlumniData';

const A_Job = () => {

    const job = JobData[0]


    return (
        <div className="bg-slate-100 min-h-screen">
            <div className="container mx-auto flex flex-col justify-center sm:flex-row py-4 gap-2">
                <div className="flex flex-col sm:w-[80%]">
                    <ViewJob data={job} />
                </div>
            </div>
        </div>
    )
}

export default A_Job