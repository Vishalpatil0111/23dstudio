import React from "react";
import ButtonN from "../Utils/ButtonN";

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-gray-50 pt-28 px-6 md:px-20 font-[bituml]">
      {/* Page Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          We’d love to hear from you. Whether it’s a project, a collaboration, or
          just a quick hello — let’s create something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Section - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold uppercase tracking-wide">
            Let’s Work Together
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Have a project in mind? Reach out to us through the form, or get in
            touch directly via our contact details below.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase text-gray-500">Email</p>
              <p className="text-lg font-medium">hello@23dstudio.com</p>
            </div>

            <div>
              <p className="text-sm uppercase text-gray-500">Phone</p>
              <p className="text-lg font-medium">+91 98765 43210</p>
            </div>

            <div>
              <p className="text-sm uppercase text-gray-500">Address</p>
              <p className="text-lg font-medium leading-relaxed">
                23D Studio <br />
                Nashik, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="bg-white shadow-lg rounded-2xl p-10 space-y-6 border border-gray-100">
          <div>
            <label className="block text-sm uppercase mb-2 tracking-wide text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm uppercase mb-2 tracking-wide text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm uppercase mb-2 tracking-wide text-gray-700">
              Message
            </label>
            <textarea
              rows="6"
              placeholder="Tell us about your project..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

            <ButtonN text="Send Message"
                        color="black"
                        variant="primary"  type="submit"/>
          
        </form>
      </div>
    </div>
  );
}
