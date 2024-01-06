import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { Button } from '@mui/material';

const ScrollUpArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className=''
      sx={{
        height: '50px',
        width: '50px',
        bottom: '4%',
        left: '101%',
        position: 'absolute',
      }}>
      <ArrowCircleUpOutlinedIcon sx={{ height: '100%', width: '100%' }} />
    </Button>
  );
};

export default ScrollUpArrow;
