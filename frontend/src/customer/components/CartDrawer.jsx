import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import * as React from 'react';
import { useState } from 'react';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [selectedSize, setSelectedSize] = useState(null);

  const buttonLabel = '$100.00';

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 330 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <img
        alt="shoe"
        className="object-contain w-full rounded-sm"
        src="https://images.vans.com/is/image/Vans/VN0009PV_BIM_HERO?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0"
      />
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="font-mono text-2xl font-bold">Vans Old Skool</h1>
          <p className="font-mono text-lg font-bold">$100.00</p>
        </div>

        <h3 className="text-sm text-gray-700 font-semibold">Size</h3>
        <div className="mt-2 grid grid-cols-2 lg:grid-cols-2 gap-2">
          <button
            type="button"
            className={`p-3 inline-flex flex-col items-center space-y-2 rounded-lg border-2  text-left`}
          >
            <span className="text-base text-gray-700 font-semibold">
              B3.5 / W5
            </span>
          </button>
          <button
            type="button"
            className={`p-3 inline-flex flex-col items-center space-y-2 rounded-lg border-2 ${
              selectedSize === "B4 / W5.5"
                ? 'border border-red-400'
                : 'border border-gray-200'
            } text-left`}
          >
            <span className="text-base text-gray-700 font-semibold">
              B4 / W5.5
            </span>
          </button>
        </div>

        <button className="font-mono mt-4 p-2 mb-2 border-meta-3 border-b-2 rounded hover:bg-gray-100 w-full">
          Add to Cart
        </button>
      </div>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            onClick={toggleDrawer(anchor, true)}
            className="glass font-mono text-white p-2 mb-2 border-b-2 border-meta-3 font-bold rounded hover:bg-gray-500 w-full"
          >
            {buttonLabel} BUY
          </button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
