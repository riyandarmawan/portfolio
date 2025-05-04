"use client";

import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setStatus("loading");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }), // Send form data
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.log(error);
    }
  };

  return (
    <section id="contact" className="py-10 lg:py-20">
      <h3 className="mb-6 font-bold text-primary-800 dark:text-primary-200 text-xl md:hidden">
        Contact
      </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state
            className="block w-full outline-none bg-primary-200 dark:bg-primary-800 border border-primary-400 dark:border-primary-600 focus:ring focus:ring-primary-400 focus:dark:ring-primary-600 rounded shadow py-2 px-4 mt-2"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="message" className="font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Update state
            className="block w-full outline-none bg-primary-200 dark:bg-primary-800 border border-primary-400 dark:border-primary-600 focus:ring focus:ring-primary-400 focus:dark:ring-primary-600 rounded shadow py-2 px-4 mt-2 min-h-40"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-6 bg-secondary-500 text-white py-2 px-4 rounded shadow hover:bg-secondary-600 transition w-full"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-green-600 mt-4">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-4">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
