'use client';

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean, message: string} | null>(null);

  const branches = [
    { value: 'chintal', label: 'Chintal' },
    { value: 'gajulramaram', label: 'Gajulramaram' },
    { value: 'bhel', label: 'BHEL' },
    { value: 'ashoknagar', label: 'Ashok Nagar' },
    { value: 'kondapur', label: 'Kondapur' },
    { value: 'pipelineroad', label: 'Pipeline Road' }
  ];

  const subjects = [
    { value: 'membership', label: 'Membership Inquiry' },
    { value: 'training', label: 'Personal Training' },
    { value: 'facilities', label: 'Facilities' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.branch || !formData.subject || !formData.message) {
      setSubmitStatus({success: false, message: 'Please fill in all required fields'});
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("https://formspree.io/f/xeokalwa", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          branch: formData.branch,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // Ensure replies go to the submitter
        }),
      });
      
      if (response.ok) {
        setSubmitStatus({success: true, message: 'Message sent successfully!'});
        setFormData({
          name: '',
          email: '',
          phone: '',
          branch: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus({success: false, message: 'Failed to send message. Please try again later.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-md" style={{ minHeight: "650px" }}>
      <form onSubmit={handleSubmit} className="space-y-12 h-full flex flex-col justify-between">
        <div className="flex-grow">
          {/* Name Field */}
          <div className="mb-10">
            <label htmlFor="name" className="block text-base text-black uppercase mb-2">
              FULL NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-0 py-2 border-0 border-b border-gray-900 focus:outline-none focus:ring-0 bg-transparent text-black"
            />
          </div>

          {/* Email and Phone Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <label htmlFor="email" className="block text-base font-medium text-black uppercase mb-2">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-0 py-2 border-0 border-b border-gray-900 focus:outline-none focus:ring-0 bg-transparent text-black"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-base font-medium text-black uppercase mb-2">
                PHONE NO.
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-0 py-2 border-0 border-b border-gray-900 focus:outline-none focus:ring-0 bg-transparent text-black"
              />
            </div>
          </div>

          {/* Branch Selection */}
          <div className="mb-10">
            <label htmlFor="branch" className="block text-base font-medium text-black uppercase mb-2">
              SELECT BRANCH
            </label>
            <div className="relative">
              <select
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                required
                className="w-full px-0 py-2 border-0 border-b border-gray-900 focus:outline-none focus:ring-0 appearance-none bg-transparent text-black"
              >
                <option value="" disabled>Select your preferred branch</option>
                {branches.map((branch) => (
                  <option key={branch.value} value={branch.value}>
                    {branch.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Subject Selection */}
          <div className="mb-10">
            <label htmlFor="subject" className="block text-base font-medium text-black uppercase mb-2">
              SUBJECT
            </label>
            <div className="relative">
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-0 py-2 border-0 border-b border-gray-900 focus:outline-none focus:ring-0 appearance-none bg-transparent text-black"
              >
                <option value="" disabled>Select a subject</option>
                {subjects.map((subject) => (
                  <option key={subject.value} value={subject.value}>
                    {subject.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-16">
            <label htmlFor="message" className="block text-base font-medium text-black uppercase mb-2">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-0 py-2 border-0 border-b border-gray-900 focus:outline-none focus:ring-0 bg-transparent text-black"
            ></textarea>
          </div>
        </div>

        {/* Status Message */}
        {submitStatus && (
          <div className={`p-4 mb-4 ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#e71b4b] text-white px-8 py-3 rounded-none flex items-center hover:bg-opacity-90 transition disabled:opacity-50"
          >
            {isSubmitting ? 'SENDING...' : 'SUBMIT'} <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}