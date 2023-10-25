import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

function PaymentRequest() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm">
        <div className="w-[10%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[20%] p-2 whitespace-nowrap">#453</div>
        <div className="w-[20%] p-2 whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-slate-700 text-blue-50">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">25 Oct 2023</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <button className="bg-indigo-500 hover:shadow-indigo-500/50 px-3 px-2 rounded-md">
            Confirm
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex flex-wrap w-full">
        <div className="w-full p-4 bg-[#283046] rounded-md text-[#d0d2d6]">
          <h2 className="text-xl font-medium pb-5 text-[#d0d2d6]">
            Withdrawal request
          </h2>
          <div className="font-bold text-sm uppercase border-b border-slate-700">
            <div className="bg-[#161d31] w-min-[340px] justify-between items-start flex">
              <div className="py-3 w-[10%]">No</div>
              <div className="py-3 w-[20%]">Amount</div>
              <div className="py-3 w-[20%]">Status</div>
              <div className="py-3 w-[25%]">Date</div>
              <div className="py-3 w-[25%]">Action</div>
            </div>
            <List
              style={{ minWidth: '340px' }}
              className="List"
              height={350}
              itemCount={array.length}
              itemSize={35}
              outerElementType={outerElementType}
            >
              {Row}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentRequest;
