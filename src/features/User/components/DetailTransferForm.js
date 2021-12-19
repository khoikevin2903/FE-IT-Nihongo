import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import FormCreateHospitalTransfer from './FormCreateHospitalTransfer';

function DetailTransferForm(props) {

    const { modal, closeModal, openModal } = props;

    const role = useSelector(state => state.Auth.info.role);

    const token = useSelector(state => state.Auth.token);

    const [loading, setLoading] = useState(false);

    const Transfer = useSelector(state => state.Transfer);

    const [transfer, setTransfer] = useState(Transfer);

    const [check, setCheck] = useState(false);

    useEffect(() => {
        setLoading(false);
        setTimeout(() => {
            setLoading(true)
            setTransfer(Transfer);
        }, 400)

    }, [Transfer])

    const ConfirmForm = () => {
        if (!transfer.accepted) {
            axios.put(`/api/transfer-form/${transfer.formId}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => setCheck(true))
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="border border-gray-400 p-4 rounded h-full relative">
            {!loading ?
                <div className="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> :
                <div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold opacity-80 text-xl">{transfer.title}</p>
                        <p className="text-blue-200 text-xs">{transfer.fromHospital.createdAt}</p>
                    </div>
                    <p className="font-medium mt-4">From: <span className="font-normal">{transfer.fromHospital.name}</span></p>
                    <p className="font-medium mt-4">Location: <span className="font-normal">{transfer.fromHospital.address}</span></p>
                    <p className="font-medium mt-4">Patient Profile: <span className="font-normal">{transfer.patientProfile}</span></p>
                    <p className="font-medium mt-4">Medical Summary: <span className="font-normal">{transfer.medicalSummary}</span></p>
                    <p className="font-medium mt-4">Doctor's diagnosis: <span className="font-normal">{transfer.doctorDiagnosis}</span></p>
                    <div>
                        <p className="font-medium mt-4">Hospital changing reason:</p>
                        <textarea readOnly value={transfer.reason} name="" id="" cols="70" rows="6"
                            className="border border-gray-400 rounded mt-3 focus:border-gray-400 focus:outline-none pl-3"></textarea>
                    </div>

                    <p className="font-medium mt-4">Contact: <span className="font-normal">{transfer.contact}</span></p>
                    {role === "MANAGER" ?
                        <div className="flex items-center justify-end mt-8">
                            <div
                                onClick={ConfirmForm}
                                className={`px-6  py-3 text-2xl cursor-pointer text-white mt-3 font-medium rounded uppercase ${transfer.accepted ? "bg-gray-600" : check ? "bg-gray-600" : "bg-blue-400"}`}>
                                {transfer.accepted ? "Confirmed" : check ? "Confirmed" : "Confirm"}
                            </div>
                        </div> :
                        <div className="flex items-center justify-between mt-8">
                            <div
                                onClick={openModal}
                                className="px-3 rounded-lg cursor-pointer py-2 border text-3xl border-gray-100 shadow bg-blue-400 text-white">
                                <ion-icon name="add-outline"></ion-icon>
                            </div>
                            <div className="px-6  py-3 text-2xl bg-blue-400 text-white mt-3 font-medium rounded uppercase">
                                {transfer.accepted ? "Confirmed" : "Not Responded"}
                            </div>
                        </div>
                    }
                </div>
            }
            {modal && <FormCreateHospitalTransfer closeModal={closeModal} />}
        </div>
    );
}

export default DetailTransferForm;