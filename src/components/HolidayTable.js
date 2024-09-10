import React, { useState } from 'react';
import HolidayPopup from './HolidayPopup';

const HolidayTable = () => {
  const [holidays, setHolidays] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleAdd = () => {
    setEditData(null);
    setPopupOpen(true);
  };

  const handleSave = (holiday) => {
    if (editData) {
      setHolidays(holidays.map(h => h === editData ? holiday : h));
    } else {
      setHolidays([...holidays, holiday]);
    }
    setPopupOpen(false);
  };

  const handleEdit = (holiday) => {
    setEditData(holiday);
    setPopupOpen(true);
  };

  const handleDelete = (holiday) => {
    setHolidays(holidays.filter(h => h !== holiday));
  };

  return (
    <div className="p-6">
      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Holiday
      </button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Date</th>
            <th className="border-b p-2">Location</th>
            <th className="border-b p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => (
            <tr key={index}>
              <td className="border-b p-2">{holiday.name}</td>
              <td className="border-b p-2">{holiday.date}</td>
              <td className="border-b p-2">{holiday.location}</td>
              <td className="border-b p-2 flex space-x-2">
                <button onClick={() => handleEdit(holiday)} className="text-blue-500">Edit</button>
                <button onClick={() => handleDelete(holiday)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <HolidayPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        onSave={handleSave}
        initialData={editData}
      />
    </div>
  );
};

export default HolidayTable;
