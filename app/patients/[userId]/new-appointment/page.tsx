import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
    const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[860px] flex-1 justify-between">
        <Image src="/assets/icons/logo-full.svg" alt="Patient" height={1000} width={1000} className="mb-12 h-10 w-fit" />

        <AppointmentForm patientId={patient.$id} userId={userId} type="create"/>

          <p className="copyright mt-10 py-4">© 2024 CarePulse</p>
      </div>
      </section>

      <Image src="/assets/images/appointment-img.png" alt="appointment" height={1000} width={800} className="w-[20%] object-cover bg-bottom"
    //   className="side-img mx-w-[50%]"
      />
    </div>
  );
}

export default NewAppointment
