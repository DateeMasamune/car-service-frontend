import axios from 'axios';
import endPoint from '../../api/endPoint';

function Auth({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  axios.get(`${endPoint}/api/auth/user/${user?.userId}?`, {
    headers: {
      Authorization: user?.token,
    },
  })
    .then((res) => {
      console.log('res', res);
    })
    .catch((err) => {
      console.log('err', err.response.data);
      if (err.response.data === 'Unauthorized') {
        localStorage.setItem('user', JSON.stringify({}));
      }
    });
  return (
    children
  );
}

export default Auth;
