import PatientForm from "@/components/forms/PatientForm";
import { ModeToggle } from "@/components/ModeToggle";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ModeToggle/>

      <section className="container my-auto remove-scrollbar">
        <div className="sub-container max-w-[496px]">
        {/* <Image
          src={'image source'}
          width={1000}
          height={1000}
          alt="patient"
          className="mb-12 h-10 w-fit"
        /> */} 
        Patient 
        <PatientForm />

        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
          &copy; 2024 Care Line
          </p>

        </div>
        </div>
      </section>
    </div>
  );
}
