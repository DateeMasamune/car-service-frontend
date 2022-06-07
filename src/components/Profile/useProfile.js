import { useSelector } from 'react-redux';

function useProfile() {
  const user = useSelector((state) => state.user);

  const getRole = (role) => {
    switch (role) {
      case 'User':
        return 'Пользователь';
      case 'Operator':
        return 'Оператор';
      default:
        return '';
    }
  };

  return {
    user,
    getRole,
  };
}

export default useProfile;
