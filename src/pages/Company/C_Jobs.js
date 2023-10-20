import React from "react";

import CompanyCard from "../../components/alumni-company/CompanyCard";
import JobContent from "../../components/alumni-company/JobContent";
import Search from "../../components/alumni-company/SearchBox";
import CreateJob from "../../components/alumni-company/CompanyNewListing";

import { JobsData, UserCardData, PendingData } from "../../data/mockAlumniData";

function Jobs() {
  const user = UserCardData[0];
  const pending = PendingData[0];
  const jobSections = JobsData;

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="container mx-auto flex flex-col sm:flex-row py-4 gap-2">
        <div className="flex flex-col sm:w-[25%] gap-2">
          <Search />
          <CompanyCard data={user} />
        </div>
        <div className="sm:w-[50%] space-y-2">
          <CreateJob />

          <div className="space-y-2">
            {jobSections.map((section, index) => (
              <JobContent key={index} data={section} />
            ))}
          </div>
        </div>

        <div className="sm:w-[25%]">
          <JobContent data={pending} />
        </div>
      </div>
    </div>
  );
}

export default Jobs;