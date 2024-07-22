import Header from './component/Header';
import EventDetails from './component/EventDetails';
import RegistrationForm from './component/RegistrationForm';
import CentralImage from './component/centralImage';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CentralImage/>
      <div className="flex flex-1 mt-0">
        <div className="w-2/6 bg-[#EEE7E2] p-8 flex items-start justify-center">
          <EventDetails />
        </div>
        <div className="w-4/6 bg-white p-8 flex items-start justify-center">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
