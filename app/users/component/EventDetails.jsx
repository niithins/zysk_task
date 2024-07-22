// components/EventDetails.js
import { MapPin, Calendar } from 'lucide-react';
export default function EventDetails() {
  return (
    <div className="p-8 mb-8">
      <h2 className="text-2xl font-bold mb-4">About the event</h2>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis consectetur turpis eu 
        pulvinar dui in condimentum justo in orci lobortis blandit. Ut ultricies mollis orci, sed tempor 
        augue facilisis ut. Id laoreet libero sapien. Integer ipsum nunc, interdum sed mattis et, 
        vestibulum et mi. Nunc congue efficitur turpis.
      </p>
      <div className="mb-4">
        <div className="flex flex-col mb-2 pt-4">
          <span className="mb-1 font-semibold"><Calendar/> When?</span>
          <span>15th July, 2024</span>
        </div>
        <div className="flex flex-col pt-4">
          <span className="mb-1 font-semibold"><MapPin/> Where?</span>
          <span>Zysk Technologies, Bangalore</span>
        </div>
      </div>
    </div>
  );
}
