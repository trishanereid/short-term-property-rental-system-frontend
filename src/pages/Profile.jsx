import { useState } from "react";
import { Camera, Check, Star, Shield } from "lucide-react";

export default function UserProfile() {
  const [isEmailPrivate, setIsEmailPrivate] = useState(false);
  const [isPhonePrivate, setIsPhonePrivate] = useState(true);
  const [location, setLocation] = useState("New York, NY");
  const [language, setLanguage] = useState("English");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState("");
  const [occupation, setOccupation] = useState("");
  const [activeTab, setActiveTab] = useState("personal");

  // Custom switch component that matches the design
  const Switch = ({ checked, onChange }) => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 
                    after:content-[''] after:absolute after:top-0.5 after:left-0.5 
                    after:bg-white after:rounded-full after:h-5 after:w-5 
                    after:transition-all peer-checked:after:translate-x-6"></div>
    </label>
  );

  const TabButton = ({ value, active, onClick, children }) => (
    <button
      className={`px-6 py-2 text-sm ${
        active 
          ? "bg-gray-100 text-gray-900 font-medium" 
          : "text-gray-600 hover:bg-gray-50"
      } transition-colors`}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex items-start gap-6">
          <div className="relative">
            <img
              src="/api/placeholder/100/100"
              alt="Profile"
              className="w-24 h-24 rounded-full bg-gray-100"
            />
            <button className="absolute bottom-0 right-0 p-1.5 bg-gray-900 rounded-full">
              <Camera className="h-4 w-4 text-white" />
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">John Doe</h1>
            <p className="text-sm text-gray-500 mt-1">Member since January 2020</p>
            <div className="flex gap-3 mt-3">
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <Check className="h-4 w-4" /> Verified
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <Star className="h-4 w-4" /> 4.9 (120 reviews)
              </span>
              <span className="text-sm text-gray-600">95% Response Rate</span>
            </div>
          </div>
        </div>
      </header>

      <div className="mb-8 border-b">
        <div className="flex">
          {["Personal Info", "Account Settings", "Host/Guest Stats", "Activity History"].map((tab, index) => (
            <TabButton
              key={index}
              value={tab.toLowerCase().replace(/\s+/g, "-")}
              active={activeTab === tab.toLowerCase().replace(/\s+/g, "-")}
              onClick={setActiveTab}
            >
              {tab}
            </TabButton>
          ))}
        </div>
      </div>

      {activeTab === "personal-info" && (
        <div className="space-y-8">
          <section className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Personal Information</h2>
            <p className="text-sm text-gray-500 mb-6">Manage your personal details and preferences</p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="flex items-center gap-3">
                  <input
                    type="email"
                    value="john.doe@example.com"
                    readOnly
                    className="w-full px-3 py-2 border rounded-md bg-gray-50"
                  />
                  <Switch checked={isEmailPrivate} onChange={setIsEmailPrivate} />
                </div>
                <p className="text-sm text-gray-500 mt-1">{isEmailPrivate ? "Private" : "Public"}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="flex items-center gap-3">
                  <input
                    type="tel"
                    value="+1 (555) 123-4567"
                    readOnly
                    className="w-full px-3 py-2 border rounded-md bg-gray-50"
                  />
                  <Switch checked={isPhonePrivate} onChange={setIsPhonePrivate} />
                </div>
                <p className="text-sm text-gray-500 mt-1">{isPhonePrivate ? "Private" : "Public"}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Language</label>
                <input
                  type="text"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact</label>
                <input
                  type="text"
                  placeholder="Name and phone number"
                  value={emergencyContact}
                  onChange={(e) => setEmergencyContact(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center gap-2 text-green-600">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm font-medium">Government ID Verified</span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">About Me</h2>
            <p className="text-sm text-gray-500 mb-6">Tell others about yourself</p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  placeholder="Write a short bio (max 500 characters)"
                  maxLength={500}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md min-h-[100px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Interests & Hobbies</label>
                <input
                  type="text"
                  placeholder="e.g., Traveling, Photography, Cooking"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work / Occupation</label>
                <input
                  type="text"
                  placeholder="Your current job or field"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}