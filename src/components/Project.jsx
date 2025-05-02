const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">

          {/* HostelHub Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
            HostelHub
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            A MERN-based hostel management system streamlining complaints, 
            leave requests, and payments for students, wardens and admins. Built using
            MongoDB, Express, React, Node.js, and styled with CSS.
            </p>
            <p>
              <a
                href="#"
                className="text-[#fe5617] font-bold text-lg hover:underline">
                Live Demo 
              </a>
              <span className="mx-2">|</span>
              <a
                href="https://github.com/viratpk18/HostelHub"
                className="text-[#fe5617] font-bold text-lg hover:underline">
                GitHub Repo
              </a>
            </p>
          </div>

          {/* Bus-Ticket Booking Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
            Bus Ticket Booking System
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Full-stack platform for booking bus tickets, viewing schedules, 
            and managing reservations. Built using MongoDB, Express, React, 
            Node.js, and styled with CSS.
            </p>
            <p className="text-center">
              <a
                href="#"
                className="text-[#fe5617] font-bold text-lg hover:underline">
                Live Demo 
              </a>
              <span className="mx-2">|</span>
              <a
                href="https://github.com/viratpk18/Bus-ticket-booking-system"
                className="text-[#fe5617] font-bold text-lg hover:underline">
                GitHub Repo
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-col gap-10">
          {/* Bus-Pass Booking Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
            Bus-Pass Booking System
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Web app for applying and managing bus passes with PDF generation.
            Built using PHP, MySQL, JavaScript and styled with CSS.
            </p>
            <p>
              <a
                href="#"
                className="text-[#fe5617] font-bold text-lg hover:underline">
                Live Demo 
              </a>
              <span className="mx-2">|</span>
              <a
                href="https://github.com/viratpk18/bus-pass-booking"
                className="text-[#fe5617] font-bold text-lg hover:underline">
                GitHub Repo
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project;
