// components/RegistrationForm.js
export default function RegistrationForm() {
  return (
    <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg mx-auto">
      <h2 className="text-1xl font-bold mb-4">Event Registration</h2>
      <div className="grid grid-cols-1 gap-4">
        {/* Form Fields */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Name*</label>
          <input type="text" className="mt-1 block w-full border-b-4 border-gray-300 rounded-md p-2" required />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Last Name*</label>
          <input type="text" className="mt-1 block w-full border-b-4 border-gray-300 rounded-md p-2" required />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Email*</label>
          <input type="email" className="mt-1 block w-full border-b-4 border-gray-300 rounded-md p-2" required />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Phone*</label>
          <input type="tel" className="mt-1 block w-full border-b-4 border-gray-300 rounded-md p-2" required />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Company Name*</label>
          <input type="text" className="mt-1 block w-full border-b-4 border-gray-300 rounded-md p-2" required />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Address Line 1*</label>
          <input type="text" className="mt-1 block w-full border-b-4 border-gray-300 rounded-md p-2" required />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
          <input type="text" className="mt-1 block w-full border-b-4 border-gray-300 rounded-md p-2" />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Postal Code*</label>
          <input type="text" className="mt-1 block w-full border-b-4 border-gray-300 rounded-md p-2" required />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">City*</label>
          <input type="text" className="mt-1 block w-full border-b-4 border-gray-300 rounded-md p-2" required />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">State*</label>
          <input type="text" className="mt-1 block w-full border-b-4 border-gray-300 rounded-md p-2" required />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Country*</label>
          <input type="text" className="mt-1 block w-full border-b-4 border-gray-300 rounded-md p-2" required />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Product of Interest (Multi Select)</label>
        <div className="flex items-center mt-1">
          <input type="checkbox" className="mr-2" />
          <span>Management</span>
        </div>
        <div className="flex items-center mt-1">
          <input type="checkbox" className="mr-2" />
          <span>IT</span>
        </div>
        <div className="flex items-center mt-1">
          <input type="checkbox" className="mr-2" />
          <span>Event Services</span>
        </div>
      </div>
      <div className="flex justify-center  mt-4">
        <button type="submit" className="bg-red-600 w-2/3 text-white py-2 px-4 rounded-md">Submit</button>
      </div>
    </form>
  );
}
