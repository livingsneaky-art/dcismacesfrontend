import React from "react";
import { Button } from "@mui/material";
import placeholder from "../../assets/placeholder.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Edit } from "@mui/icons-material";


const CompanyProfileCard = ({ userData }) => {
    const navigate = useNavigate();

    const handleDownload = () => {
        const linkSource = `data:application/pdf;base64,${userData.moa}`;
        const downloadLink = document.createElement('a');
        const fileName = `moa-${userData.companyName}.pdf`;

        downloadLink.href = linkSource;
        downloadLink.download = fileName;

        setTimeout(() => {
            downloadLink.click();
        }, 100);
    };


    return (
        <form>
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="flex flex-col bg-white border rounded-lg p-4 mx-4 sm:mx-0 space-y-2">
                <div className="flex flex-col mx-auto justify-center items-center text-center">
                    <img
                        src={userData.profileImage ? `data:image/jpeg;base64,${userData.profileImage}` : placeholder}
                        alt="placeholder"
                        className="w-[100px] h-[100px] rounded-full border border-slate-300 "
                    />
                </div>

                <div className="flex flex-col text-[12px] space-y-2">
                    <div className="flex flex-col bg-white border border-slate-200 p-4 mb-2 rounded-lg">
                        <p className="font-bold ">Personal Information</p>
                        <div className="flex items-center justify-between">
                            <label className="text-[12px] w-[100px]">First Name: </label>
                            <p className="font-bold">
                                {userData.firstName ? userData.firstName : "Not Indicated"}
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-[12px] w-[100px]">Last Name: </label>

                            <p className="font-bold ">
                                {userData.lastName ? userData.lastName : "Not Indicated"}
                            </p>

                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-[12px] w-[100px]">Middle Name: </label>

                            <p className="font-bold ">
                                {userData.middleName ? userData.middleName : "Not Indicated"}
                            </p>

                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-[12px] w-[100px]">Email Address: </label>
                            <p className="font-bold "> {userData?.email}</p>
                        </div>

                        <div className="flex mx-auto border border-solid border-slate-200 h-px w-full my-2" />
                        <p className="font-bold ">Company Information</p>
                        <div className="flex items-center justify-between">
                            <label className="text-[12px] w-[100px]">Contact Number: </label>
                            <p className="font-bold ">
                                {userData.mobileNumber ? userData.mobileNumber : "Not Indicated"}
                            </p>

                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-[12px] w-[100px]">Company Name: </label>

                            <p className="font-bold capitalize">
                                {userData.companyName ? userData.companyName : "Not Indicated"}
                            </p>

                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-[12px] w-[100px]">Company Address: </label>

                            <p className="font-bold capitalize">
                                {userData.companyAddress ? userData.companyAddress : "Not Indicated"}
                            </p>

                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-[12px] w-[100px]">Website Link: </label>
                            <a
                                href={userData.websiteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold capitalize"
                            >
                                {userData?.websiteLink ? userData.websiteLink : "Not Indicated"}
                            </a>
                        </div>
                        <div className="flex items-center justify-between">
                            {userData.moa && userData.moa.length > 0 && (
                                <div style={{ flex: 1 }}>
                                    <label className="text-[12px] w-[100px]">Uploaded Moa: </label>
                                    <button className="border-[1px] rounded-3xl p-2 mt-2 inline-block mx-1 bg-slate-100" onClick={handleDownload}>
                                        Download MOA
                                    </button>
                                </div>
                            )}
                            {!userData.moa && (
                                <div>
                                    <span style={{ color: "gray" }}>No MOA Uploaded</span>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center">
                            <Button
                                type="button"
                                variant="contained"
                                size="medium"
                                onClick={() => navigate('/company/edit-profile')}
                                startIcon={<Edit />}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    marginTop: "2rem",
                                    backgroundColor: "yellow",
                                    color: "black",
                                    "& .MuiSvgIcon-root": {
                                        marginRight: "0.5rem",
                                    },
                                    "&:hover": {
                                        backgroundColor: "yellow",
                                    },
                                }}
                            >
                                Edit Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </div >
        </form >
    );
}

export default CompanyProfileCard