import { useState, useEffect } from 'react';

const OptionsForm = ({ setPrice }) => {
  const [type, setType] = useState('');
  const [project, setProject] = useState('');
  const [size, setSize] = useState('');
  const [features, setFeatures] = useState([]);
  const [urgency, setUrgency] = useState('');

  // Update the price based on selected options
  useEffect(() => {
    let price = 0;

    // Calculate price based on company type
    switch (type) {
      case 'small':
        price += 400;
        break;
      case 'large':
        price += 1000;
        break;
      case 'individual':
        price += 200;
        break;
    }

    // Calculate price based on project type
    switch (project) {
      case 'website':
        price += 400;
        break;
      case 'webapp':
        price += 300;
        break;
      case 'mobileapp':
        price += 250;
        break;
      case 'other':
        price += 400;
        break;
    }

    // Calculate price based on project size
    switch (size) {
      case 'tiny':
        price += 100;
        break;
      case 'small':
        price += 300;
        break;
      case 'large':
        price += type === 'large' ? 1200 : 800;
        break;
    }

    // Adjust price based on selected features
    features.forEach((feature) => {
      switch (feature) {
        case 'smallUIs':
          price *= 0.5;
          break;
        case 'entirePlatform':
          price *= 2;
          break;
      }
    });

    // Adjust price based on urgency
    switch (urgency) {
      case 'very':
        price *= 2;
        break;
      case 'moderate':
        price *= 1.25;
        break;
    }

    // Round to the nearest hundred
    price = Math.round(price / 100) * 100;
    setPrice(price);
  }, [type, project, size, features, urgency]);

  // Reusable button component to reduce repetition
  const OptionButton = ({ label, isActive, onClick }) => (
    <button
      type="button"
      className={`w-full rounded-more p-4 border ${isActive ? 'bg-blue-200 border-blue-400' : 'border-gray-300'} text-black hover:bg-blue-100 hover:border-blue-400 transition ease-in-out duration-200`}
      onClick={onClick}
    >
      {label}
    </button>
  );
  

  return (
    <form className="space-y-6">
      {/* Company Type */}
      <div>
        <label className="block mb-2 text-light">What type of company are you?</label>
        <div className="flex space-x-2">
          {['Small Company', 'Large Company', 'Individual'].map((label, index) => {
            const value = ['small', 'large', 'individual'][index];
            return (
              <OptionButton
                key={value}
                label={label}
                isActive={type === value}
                onClick={() => setType(type === value ? '' : value)}
              />
            );
          })}
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label className="block mb-2 text-light">Project Type</label>
        <div className="flex space-x-2">
          {['Website', 'Web App', 'Mobile App', 'Other'].map((label, index) => {
            const value = ['website', 'webapp', 'mobileapp', 'other'][index];
            return (
              <OptionButton
                key={value}
                label={label}
                isActive={project === value}
                onClick={() => setProject(project === value ? '' : value)}
              />
            );
          })}
        </div>
      </div>

      {/* Project Size */}
      <div>
        <label className="block mb-2 text-light">How big is your project?</label>
        <div className="flex space-x-2">
          {['Small', 'Medium', 'Large'].map((label, index) => {
            const value = ['tiny', 'small', 'large'][index];
            return (
              <OptionButton
                key={value}
                label={label}
                isActive={size === value}
                onClick={() => setSize(size === value ? '' : value)}
              />
            );
          })}
        </div>
      </div>

      {/* Project Features */}
      <div>
        <label className="block mb-2 text-light">What do you need in the project?</label>
        <div className="flex space-x-2">
          {['Design small UIs', 'Design entire platform', 'Other'].map((label, index) => {
            const value = ['smallUIs', 'entirePlatform', 'other'][index];
            return (
              <OptionButton
                key={value}
                label={label}
                isActive={features.includes(value)}
                onClick={() =>
                  setFeatures((prev) =>
                    prev.includes(value)
                      ? prev.filter((f) => f !== value)
                      : [...prev, value]
                  )
                }
              />
            );
          })}
        </div>
      </div>

      {/* Project Urgency */}
      <div>
        <label className="block mb-2 text-light">How urgent is the project?</label>
        <div className="flex space-x-2">
          {['Very Urgent', 'Moderate Urgency', 'Flexible'].map((label, index) => {
            const value = ['very', 'moderate', 'flexible'][index];
            return (
              <OptionButton
                key={value}
                label={label}
                isActive={urgency === value}
                onClick={() => setUrgency(urgency === value ? '' : value)}
              />
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default OptionsForm;
