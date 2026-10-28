import React from 'react';
import { auth, signIn } from '@/auth';
import ManageSubscription from './ManageSubscription';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { CreditCard, Crown, Shield, Star } from 'lucide-react';

const Page = async () => {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    signIn();
    return null;
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, session.user.id),
  });

  const isPremium = user?.subscribed;

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white p-4 overflow-hidden">
      {}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-slate-900 to-slate-800" />

      <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold">Subscription Details</h1>
            {isPremium && <Crown className="h-6 w-6 text-yellow-300" />}
          </div>
          <p className="text-blue-100">Account: {user?.email || session.user.email}</p>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                isPremium ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : 'bg-gray-700'
              }`}>
                {isPremium ? 
                  <Star className="h-6 w-6 text-white" /> : 
                  <CreditCard className="h-6 w-6 text-gray-300" />
                }
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {isPremium ? 'Premium Plan' : 'Free Plan'}
                </h2>
                <p className="text-gray-300">
                  {isPremium ? 'You have access to all premium features' : 'Upgrade to unlock all features'}
                </p>
              </div>
            </div>

            {isPremium ? (
              <div className="bg-slate-700 rounded-lg p-4 mb-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-2" />
                    <span>Unlimited quiz generation</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-2" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-2" />
                    <span>Priority customer support</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="bg-slate-700 rounded-lg p-4 mb-6">
                <p className="text-center text-gray-300 mb-2">
                  Upgrade to Premium for full access to all features
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <ManageSubscription />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
