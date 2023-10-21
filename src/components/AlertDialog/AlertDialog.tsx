import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type AlertDialogProps = {
  isOpen: boolean;
  dialogText?: string;
  dialogTitle?: string;
  agreeButtonText?: string;
  disagreeButtonText?: string;
  onAgree: () => void;
  onDisagree: () => void;
};

const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  dialogText,
  dialogTitle,
  agreeButtonText,
  disagreeButtonText,
  onAgree,
  onDisagree,
}) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onDisagree}
        aria-describedby='alert-dialog-slide-description'>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            {dialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onAgree} color='warning' variant='contained'>
            {agreeButtonText ? agreeButtonText : 'Agree'}
          </Button>
          <Button onClick={onDisagree} variant='contained'>
            {disagreeButtonText ? disagreeButtonText : 'Disagree'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
