import React, { useState } from "react";
import { db } from "./firebaseConfig"; // ✅ Import Firestore instance
import { collection, addDoc } from "firebase/firestore";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    grade: "",
    phone: "",
    email: "",
    mode: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Store data in Firestore
      await addDoc(collection(db, "leads"), formData);
      alert("Submitted successfully!");

      // ✅ Reset form after submission
      setFormData({
        firstName: "",
        lastName: "",
        grade: "",
        phone: "",
        email: "",
        mode: "",
        message: "",
      });
    } catch (error) {
      console.error("Firestore error:", error);
      alert("Error submitting lead, try again.");
    }
  };

  return (
    <>
      <h1 className="text-3xl italic uppercase font-urbanist mt-12 text-[#B21A39] font-black px-[5vw] max-sm:px-[8vw] text-left ">
        Chate Admission Enquiry Form
      </h1>

      <div className="w-full px-[5vw] flex my-10 justify-between bg-white font-urbanist max-sm:flex-col max-sm:px-[8vw]">
        {/* Left panel - Steps for Admission */}
        <div className="md:w-1/4 bg-red rounded-3xl p-6 text-white relative overflow-hidden">
          {/* Star at top right */}
          <div className="absolute top-5 -right-10">
            <img src="/star-union.png" alt="star" className="w-40 h-40" />
          </div>

          {/* Star at bottom left */}
          <div className="absolute bottom-0 left-0">
            <img src="/star-union.png" alt="star" className="w-40 h-40" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-10">
            <h2 className="text-xl font-bold mb-6">Steps for Admission</h2>

            <div className="space-y-2">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-700 font-bold">
                    1
                  </div>
                  <div className="w-0.5 h-10 my-2 bg-white"></div>
                </div>
                <div>
                  <p className="font-semibold">Submit Inquiry Form</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-700 font-bold">
                    2
                  </div>
                  <div className="w-0.5 h-10 my-2 bg-white"></div>
                </div>
                <div>
                  <p className="font-semibold">Campus Visit &</p>
                  <p className="font-semibold">Counselling</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-700 font-bold">
                    3
                  </div>
                  <div className="w-0.5 h-10 my-2 bg-white"></div>
                </div>
                <div>
                  <p className="font-semibold">Application Submission</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-700 font-bold">
                    4
                  </div>
                  <div className="w-0.5 h-10 my-2 bg-white"></div>
                </div>
                <div>
                  <p className="font-semibold">Student Interaction &</p>
                  <p className="font-semibold">Assessment</p>
                  <p className="text-sm">(For applicable grades)</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-700 font-bold">
                    5
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Admission Confirmation</p>
                  <p className="font-semibold">&</p>
                  <p className="font-semibold">Fee Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right panel - Form */}
        <div className="w-[62vw] max-sm:w-full max-sm:mt-12 h-full my-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 bg-red-50 rounded-2xl"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 bg-red-50 rounded-2xl"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Grade Applying For */}
              <div>
                <label
                  htmlFor="grade"
                  className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                >
                  Grade Applying For
                </label>
                <div className="relative">
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full p-3 bg-red-50 rounded-2xl appearance-none pr-10"
                    required
                  >
                    <option value="" disabled>
                      Grade
                    </option>
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="3">Grade 3</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-red-50 rounded-2xl"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-red-50 rounded-2xl"
                  required
                />
              </div>

              {/* Preferred Mode of Contact */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                >
                  Preferred Mode of Contact
                </label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-red-50 rounded-2xl"
                  required
                />
              </div>
            </div>

            {/* Specific Queries */}
            <div>
              <label
                htmlFor="queries"
                className="block text-sm font-medium text-gray-700 mb-1 ml-1"
              >
                Any Specific Queries
              </label>
              <textarea
                id="queries"
                name="queries"
                value={formData.queries}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 bg-red-50 rounded-2xl"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-14 py-4 bg-red text-white font-bold mt-3 rounded-full hover:bg-red/80 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
