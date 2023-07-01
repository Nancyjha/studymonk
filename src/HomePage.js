import React from 'react';
 const HomePage = () => {
  // Mock data for previous search results
  const searchResults = [
    { name: 'John Doe', role: 'Software Engineer', location: 'San Francisco' },
    { name: 'Jane Smith', role: 'UX Designer', location: 'New York' },
    { name: 'Michael Johnson', role: 'Marketing Manager', location: 'Chicago' },
  ];

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      {/* Hero section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white">Online Recruitment Solution</h1>
          <p className="mt-4 text-lg text-gray-300">
            Streamline your hiring process and find the best talent for your company.
          </p>
        </div>
      </section>

      {/* Features section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-orange-300 dark:bg-range-600">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Key Features</h2>
          <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
            {/* Feature 1 */}
            <div className="rounded-lg shadow-lg p-6 bg-gray-100 dark:bg-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Advanced Search</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Find the perfect candidates quickly using our advanced search functionality. Filter by location, job
                roles, skills, and more.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg shadow-lg p-6 bg-gray-100 dark:bg-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Efficient Evaluation</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Evaluate candidates easily with our intuitive interface. View their profiles, resumes, and track their
                progress in the hiring process.
              </p>
            </div>
{/* Feature 3 */}
<div className="rounded-lg shadow-lg p-6 bg-gray-100 dark:bg-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Collaborative Workflow</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Collaborate seamlessly with your team members. Assign tasks, leave comments, and share feedback on
                candidates.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-lg shadow-lg p-6 bg-gray-100 dark:bg-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data-driven Insights</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Gain valuable insights into your hiring process. Track metrics, analyze performance, and make informed
                decisions.
              </p>
            </div>
            </div>
        </div>
      </section>

      {/* Efficiency section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-100 dark:text-white">Efficiency for Hiring Managers and HR Professionals</h2>
          <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
            {searchResults.map((result, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg p-6 flex flex-col justify-center items-center bg-white dark:bg-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{result.name}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Role: {result.role}
                  <br />
                  Location: {result.location}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-lg text-gray-400 dark:text-gray-100">
            Our solution provides efficient and effective candidate search and evaluation, saving you time and resources
            in the hiring process.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;