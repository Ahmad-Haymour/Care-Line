import React from "react";
import Image from "next/image";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

export default async function NewAppointment({params: {userId}}: SearchParamProps) {
    const patient = await getPatient(userId)
    
    return (
    <div className="flex h-screen max-h-screen">
      <section className="container my-auto remove-scrollbar">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src={"/assets/brand/logo1.png"}
            width={1000}
            height={1000}
            alt="patient"
            className="mb-2 h-28 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />

          <p className="copyright mt-10 py-12">
            &copy; 2024 Care Line
          </p>
        </div>
      </section>
      <Image
        src={"/assets/images/appointment-img.png"}
        width={1000}
        height={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
