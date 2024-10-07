import PatientForm from "@/components/forms/PatientForm";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ModeToggle/>

      <section className="container my-auto remove-scrollbar">
        <div className="sub-container max-w-[496px]">
          <Image
            src={'/assets/icons/logo-full.svg'}
            width={1000}
            height={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          /> 
           
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
            &copy; 2024 Care Line
            </p>
            <Link href={'/?admin=true'} className="text-green-500" >
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
          src={"/assets/images/onboarding-img.png"}
          width={1000}
          height={1000}
          alt="patient"
          className="side-img max-w-[50%]"
        />
    </div>
  );
}
