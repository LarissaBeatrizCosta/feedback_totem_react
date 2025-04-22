// components/dialogs.js
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

export default function AlertDialog({ text }) {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Alert variant="filled" severity="error">
        {text}
      </Alert>
    </Box>
  );
}
