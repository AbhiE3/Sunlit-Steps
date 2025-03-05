import React from 'react';

const NewTeam = () => {
  return (
    <div className="bg-gray-50 py-10 px-5 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Team of Professionals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {/* Team Member Cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-gray-700">Dr. Talya Sulami</h3>
          <p className="text-gray-600">Head of Clinic</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-gray-700">Dr. Tom Chie</h3>
          <p className="text-gray-600">Family Doctor</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-gray-700">George Mekler</h3>
          <p className="text-gray-600">Therapist</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-gray-700">Ellnor Jonas</h3>
          <p className="text-gray-600">Speech Therapist</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-gray-700">Lee Levin</h3>
          <p className="text-gray-600">Hospice Nurse</p>
        </div>
      </div>
      {/* Let's Chat Button */}
      <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
        Let's Chat!
      </button>
    </div>
  );
};

export default NewTeam;