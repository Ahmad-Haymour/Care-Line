import React from "react";
import Image from "next/image";
import { getUser } from "@/lib/actions/patient.actions";
import RegisterForm from "@/components/forms/RegisterForm";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  
  return (
    <div className="flex h-screen max-h-screen">
      <section className="container remove-scrollbar">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src={"/assets/brand/logo1.png"}
            width={1000}
            height={1000}
            alt="patient"
            className="mb-2 h-28 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">
            &copy; 2024 Care Line
          </p>
        </div>
      </section>
      <Image
        src={"/assets/images/register-img.png"}
        width={1000}
        height={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
