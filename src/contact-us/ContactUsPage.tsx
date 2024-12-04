function ContactUsPage() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 mt-6 text-white">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold">Github</h2>
            <p className="mt-2 text-gray-600">
              You can find the source code of this project on Github:
              https://github.com/VeejaLiu/FIFA-Career-Dashboard-Frontend
            </p>
          </div>
          <div className="card bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold">Discord</h2>
            <p className="mt-2 text-gray-600">
              Join our Discord server: https://discord.gg/aKfWAtbJ8F
            </p>
          </div>
          <div className="card bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="mt-2 text-gray-600">
              Email us at support@fccareer.top
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
