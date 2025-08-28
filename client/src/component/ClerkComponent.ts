import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';

export default function ClerkComponent() {
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();

        const response = await axios.get('http://localhost:3000/users/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('User from backend:', response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchData();
  }, [getToken]);

  return null;
}