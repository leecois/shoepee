import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

const OrderDetailModal = ({ order, isOpen, onClose }) => {
  if (!order) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Order ID: {order.orderId}
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom variant="subtitle1">
          Status: {order.orderStatus}
        </Typography>
        <Divider light />
        <Typography gutterBottom variant="subtitle1">
          Payment Status: {order.paymentStatus}
        </Typography>
        <Divider light />
        <Divider light />
        <Typography gutterBottom variant="subtitle1">
          Full Name: {order.fullName}
        </Typography>
        <Divider light />
        <Typography gutterBottom variant="subtitle1">
          Phone: {order.phoneNumber}
        </Typography>
        <Divider light />
        <Typography gutterBottom variant="subtitle1">
          Address: {order.billingAddress}
        </Typography>
        <Divider light />
        <Typography gutterBottom variant="subtitle1">
          Payment Method: {order.paymentMethod}
        </Typography>
        <Divider light />
        <Typography gutterBottom variant="subtitle1">
          Order Created At: {new Date(order.orderCreateAt).toLocaleString()}
        </Typography>
        <Divider light />
        {order.orderCompeledAt && (
          <Typography gutterBottom variant="subtitle1">
            Order Completed At:{' '}
            {new Date(order.orderCompeledAt).toLocaleString()}
          </Typography>
        )}

        <Typography
          gutterBottom
          variant="h6"
          sx={{ fontWeight: 'bold', marginTop: 2 }}
        >
          Purchased Products:
        </Typography>
        <List>
          {order.orderItem?.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar
                  src={item.shoeDto.imageUrl}
                  alt={item.shoeDto.name}
                  variant="square"
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.shoeDto.name}
                secondary={`Customize Price: ${item.customizedShoeDto.price.toLocaleString(
                  'de-DE'
                )} VND - Size: ${item.size} - Quantity: ${
                  item.productQuantity
                }`}
                primaryTypographyProps={{
                  sx: { fontFamily: 'inherit', fontWeight: 'bold' },
                }}
                secondaryTypographyProps={{ sx: { fontFamily: 'inherit' } }}
              />
              {index < order.orderItem.length - 1 && <Divider />}
            </ListItem>
          ))}
        </List>
      </DialogContent>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
          variant="subtitle1"
        >
          Total Amount: {order.orderAmt.toLocaleString('de-DE')} VND
        </Typography>
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </Box>
    </Dialog>
  );
};

export default OrderDetailModal;
