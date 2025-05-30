import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GetAllBeds from './components/beds/GetAllBeds';
import AddBed from './components/beds/AddBed';
import UpdateBed from './components/beds/UpdateBed';
import GetAllHospitals from './components/hospital/GetAllHospitals';
import GetHospitalById from './components/hospital/GetHospitalById';
import GetDoctorById from './components/doctor/GetDoctorById';
import GetAllDoctors from './components/doctor/GetAllDoctors';
import AddDoctor from './components/doctor/AddDoctor';
import UpdateDoctor from './components/doctor/UpdateDoctor';
import DeleteDoctor from './components/doctor/DeleteDoctor';
import GetAllInventoryItems from './components/inventory/GetAllInventoryItems';
import AddMedicine from './components/inventory/AddMedicine';
import UpdateMedicine from './components/inventory/UpdateMedicine';
import GetAllNurses from './components/nurse/GetAllNurses';
import AddNurse from './components/nurse/AddNurse';
import UpdateNurse from './components/nurse/UpdateNurse';
import GetNurseById from './components/nurse/GetNurseById';
import GetAllPatients from './components/patient/GetAllPatients';
import AddPatient from './components/patient/AddPatient';
import UpdatePatient from './components/patient/UpdatePatient';
import GetPatientById from './components/patient/GetPatientById';
import GetAllQueues from './components/queue/GetAllQueues';
import AddToQueue from './components/queue/AddToQueue';
import UpdateQueueStatus from './components/queue/UpdateQueueStatus';
import FetchBedAvailability from './components/queue/FetchBedAvailability';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ResetPassword from './components/auth/ResetPassword';

import Home from './components/auth/Home';
import ManageBeds from './components/hospital/ManageBeds';
import ManageRooms from './components/hospital/ManageRooms';
import ForgetPassword from './components/auth/ForgetPassword';
import DoctorSlotManager from './components/doctor/DoctorSlotManager';
import AdminDashboard from './components/admin/AdminDashboard';
import HospitalSignup from './components/auth/HospitalSignup';
import PatientSignup from './components/auth/PatientSignup';
import DeletePatient from './components/patient/DeletePatient';
import { useSelector } from 'react-redux';

const RouteManager = () => {
  const { token, role } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <>
          <Route path="/room/get" element={<ManageRooms />} />
          <Route path="/room/edit/:roomName/:roomId" element={<ManageBeds />} />
          <Route path="/hospital/get" element={<GetAllHospitals />} />
          <Route path="/hospital/getByid/:hospitalid" element={<GetHospitalById />} />
      </>
      {role === "Admin" && (
        <>
          <Route path='/admin' element={<AdminDashboard /> } />
        </>
      )}
      {role === 'Hospital' && (
        <>
          <Route path="/doctor/get" element={<GetAllDoctors />} />
          <Route path="/doctor/add" element={<AddDoctor />} />
          <Route path="/doctor/update/:doctorid" element={<UpdateDoctor />} />
          <Route path="/doctor/delete" element={<DeleteDoctor />} />
          <Route path="/doctor/getByid/:doctorid" element={<GetDoctorById />} />
          <Route path="/doctor/dashboard/:doctorid" element={<DoctorSlotManager />} />
          <Route path="/patient/get" element={<GetAllPatients />} />
          <Route path="/patient/add" element={<AddPatient />} />
        </>
      )}
      {role === 'Patient' && ( 
        <>
          <Route path='/patients' element={<Home />}/>
        <Route path="/patient/get" element={<GetAllPatients />} />
        <Route path="/patient/add" element={<AddPatient />} />
        <Route path="/patient/remove/:id" element={<DeletePatient />} />
        <Route path="/patient/byId/:id" element={<GetPatientById />} />
        <Route path="/patient/edit/:patientid" element={<UpdatePatient />} />
        </>

    )}
      {!role && (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="/patient-signup" element={<PatientSignup />} />
      <Route path="/hospital-signup" element={<HospitalSignup />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
    </Routes>
  );
};

export default RouteManager;
