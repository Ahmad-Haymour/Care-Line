import PatientForm from "@/components/forms/PatientForm";
import PasskeyModal from "@/components/PasskeyModal";
import Link from "next/link";
import Image from "next/image";

export default function Home({searchParams}: SearchParamProps) {
  const isAdmin = searchParams.admin === 'true';

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <section className="container my-auto remove-scrollbar">
        <div className="sub-container max-w-[496px]">
          <Image
            src={'/assets/brand/logo1.png'}
            width={1000}
            height={1000}
            alt="patient"
            className="mb-2 h-28 w-fit"
          /> 
           
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
            &copy; 2024 Care Line
            </p>
            <Link href={'/?admin=true'} className="text-sky-500 underline" >
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
