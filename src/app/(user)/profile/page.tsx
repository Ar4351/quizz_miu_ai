"use client"
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import axios from 'axios';

type UserProfile = {
  name: string;
  imageUrl: string;
  loginStreak: number;
  badges: string[];
};

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('/api/user/profile');
        setUser(res.data);
      } catch (error) {
        console.error('Failed to fetch user profile', error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-md mx-auto">
      <Card className="shadow-md">
        <CardContent className="flex flex-col items-center space-y-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={user.imageUrl} alt={user.name} />
          </Avatar>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">Login Streak: {user.loginStreak} days</p>
          <div className="flex flex-wrap justify-center gap-2">
            {user.badges.map((badge, index) => (
              <Badge key={index} variant="secondary">{badge}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;