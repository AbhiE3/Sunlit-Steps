
const InContact = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
      <div className="max-w-lg mx-auto">
        <form className="bg-white p-8 rounded-lg shadow-lg text-[#333333]">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 border border-[#6CB4EE] rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 border border-[#6CB4EE] rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-3 border border-[#6CB4EE] rounded"
            // rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#FFD700] text-white py-3 rounded-full hover:bg-[#FFC000] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default InContact
