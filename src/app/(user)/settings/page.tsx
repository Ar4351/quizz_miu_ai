"use client";
import React, { useState } from 'react';
import { Save, Bell, Lock, User, CreditCard, Globe, Moon, Sun, HelpCircle, LogOut } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  
  
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software developer with a passion for building great products.',
    location: 'San Francisco, CA',
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    alert('Settings saved successfully!');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
         <div className="fixed bg-gradient-to-b from-gray-950 to-gray-900 inset-0 z-[-1] "></div>

      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your account settings and preferences</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {}
          <aside className="w-full md:w-64 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center px-4 py-3 rounded-md text-left ${
                  activeTab === 'profile' 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <User className="h-5 w-5 mr-3" />
                <span>Profile</span>
              </button>
              <button
                onClick={() => setActiveTab('account')}
                className={`w-full flex items-center px-4 py-3 rounded-md text-left ${
                  activeTab === 'account' 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <Lock className="h-5 w-5 mr-3" />
                <span>Account</span>
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`w-full flex items-center px-4 py-3 rounded-md text-left ${
                  activeTab === 'notifications' 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <Bell className="h-5 w-5 mr-3" />
                <span>Notifications</span>
              </button>
              <button
                onClick={() => setActiveTab('billing')}
                className={`w-full flex items-center px-4 py-3 rounded-md text-left ${
                  activeTab === 'billing' 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <CreditCard className="h-5 w-5 mr-3" />
                <span>Billing</span>
              </button>
              <button
                onClick={() => setActiveTab('appearance')}
                className={`w-full flex items-center px-4 py-3 rounded-md text-left ${
                  activeTab === 'appearance' 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <Sun className="h-5 w-5 mr-3" />
                <span>Appearance</span>
              </button>
              <button
                onClick={() => setActiveTab('help')}
                className={`w-full flex items-center px-4 py-3 rounded-md text-left ${
                  activeTab === 'help' 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <HelpCircle className="h-5 w-5 mr-3" />
                <span>Help & Support</span>
              </button>
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full flex items-center px-4 py-3 rounded-md text-left text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20">
                <LogOut className="h-5 w-5 mr-3" />
                <span>Log Out</span>
              </button>
            </div>
          </aside>

          {}
          <main className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Profile Settings</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      rows={4}
                      value={profile.bio}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={profile.location}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Notification Preferences</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="text-md font-medium text-gray-900 dark:text-white">Email Notifications</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via email</p>
                    </div>
                    <Switch 
                      checked={emailNotifications} 
                      onCheckedChange={setEmailNotifications} 
                    />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="text-md font-medium text-gray-900 dark:text-white">Push Notifications</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications on your device</p>
                    </div>
                    <Switch 
                      checked={pushNotifications} 
                      onCheckedChange={setPushNotifications} 
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Appearance Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="text-md font-medium text-gray-900 dark:text-white">Dark Mode</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Toggle between light and dark themes</p>
                    </div>
                    <div className="flex items-center">
                      <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                      <Switch 
                        checked={darkMode} 
                        onCheckedChange={setDarkMode} 
                      />
                      <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'account' && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Account Settings</h2>
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md">
                    <h3 className="text-md font-medium text-yellow-800 dark:text-yellow-300">Password</h3>
                    <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-2">For security reasons, we recommend changing your password regularly.</p>
                    <button className="px-3 py-1.5 bg-yellow-600 text-white text-sm rounded-md hover:bg-yellow-700">
                      Change Password
                    </button>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-md">
                    <h3 className="text-md font-medium text-red-800 dark:text-red-300">Delete Account</h3>
                    <p className="text-sm text-red-700 dark:text-red-400 mb-2">Once you delete your account, there is no going back. Please be certain.</p>
                    <button className="px-3 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Billing Information</h2>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="px-4 py-5 sm:px-6 bg-gray-50 dark:bg-gray-750">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Current Plan</h3>
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                          Active
                        </span>
                        <h4 className="mt-1 text-lg font-medium text-gray-900 dark:text-white">Premium Plan</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Billed annually</p>
                      </div>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">$99/year</span>
                    </div>
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Change Plan
                      </button>
                      <button className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                        Cancel Subscription
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Payment Methods</h3>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                        <CreditCard className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">•••• •••• •••• 4242</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Expires 12/2024</p>
                      </div>
                    </div>
                    <div>
                      <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        Edit
                      </button>
                    </div>
                  </div>
                  <button className="mt-3 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center">
                    <span className="mr-1">+</span> Add payment method
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'help' && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Help & Support</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md">
                    <h3 className="text-md font-medium text-blue-800 dark:text-blue-300">Documentation</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-400 mb-2">Check out our documentation for answers to common questions.</p>
                    <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                      View Documentation
                    </button>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md">
                    <h3 className="text-md font-medium text-blue-800 dark:text-blue-300">Contact Support</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-400 mb-2">Can't find what you're looking for? Contact our support team.</p>
                    <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
 
  );
};

export default SettingsPage;