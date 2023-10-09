import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col w-screen h-full items-center justify-center mt-10 mb-10'>
      <h1 className='text-5xl '>Ooops!</h1>

      <div className='flex flex-col items-center m-10 gap-5'>
        <h2 className='text-2xl'>404 - Page Not Found</h2>
        <p>
          The page you are looking for might have been removed or it didnt
          exists
        </p>
      </div>
      <Button variant='contained' onClick={handleBackToHome}>
        go to home page
      </Button>
    </div>
  );
};

export default NotFound;
