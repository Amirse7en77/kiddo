import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface ClientInfo {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  role: string;
}

const fetchClientInfo = async (): Promise<ClientInfo> => {
  const response = await axios.get('/api/v1/accounts/me/', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  });
  console.log(response)
  return response.data;
};

export const useClientInfo = () => {
  return useQuery({
    queryKey: ['clientInfo'],
    queryFn: fetchClientInfo,
  });
};
