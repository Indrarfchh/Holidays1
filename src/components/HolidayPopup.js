import React, { useState, useEffect } from 'react';

const HolidayPopup = ({ isOpen, onClose, onSave, initialData }) => {
  const [holiday, setHoliday] = useState({ name: '', date: '', location: '' });

  useEffect(() => {
    if (initialData) {
      setHoliday(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHoliday(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(holiday);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl mb-4">Add/Edit Holiday</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name of the Holiday</label>
            <input
              type="text"
              name="name"
              value={holiday.name}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={holiday.date}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={holiday.location}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HolidayPopup;
