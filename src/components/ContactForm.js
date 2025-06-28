"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    time: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.reason) newErrors.reason = "Please tell us why you're reaching out";
    if (!form.time) newErrors.time = "Preferred time is required";
    if (!form.agree) newErrors.agree = "You must agree to be contacted";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted!");
      // You can send the form somewhere
    }
  };

  const fields = [
    { key: "name", label: "Name" },
    { key: "phone", label: "Phone" },
    { key: "email", label: "Email" },
    { key: "time", label: "Preferred Time" }, 
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#e6e8eb]">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map(({ key, label }) => (
            <div key={key}>
              <label className="block font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type="text"
                placeholder={key === "time" ? "e.g. Weekdays after 3 PM" : ""}
                className={`w-full border ${
                  errors[key] ? "border-red-500" : "border-gray-300"
                } p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={form[key]}
                onChange={(e) =>
                  setForm({ ...form, [key]: e.target.value })
                }
              />
              {errors[key] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[key]}
                </p>
              )}
            </div>
          ))}

          {/* Textarea */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              What brings you here?
            </label>
            <textarea
              className={`w-full border ${
                errors.reason ? "border-red-500" : "border-gray-300"
              } p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              rows={4}
              value={form.reason}
              onChange={(e) =>
                setForm({ ...form, reason: e.target.value })
              }
            />
            {errors.reason && (
              <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
            )}
          </div>

          {/* Checkbox */}
          <div className="flex items-start">
            <input
              type="checkbox"
              className="mt-1"
              checked={form.agree}
              onChange={(e) =>
                setForm({ ...form, agree: e.target.checked })
              }
            />
            <label className="ml-3 text-gray-700">
              I agree to be contacted
            </label>
          </div>
          {errors.agree && (
            <p className="text-red-500 text-sm mt-1">{errors.agree}</p>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
