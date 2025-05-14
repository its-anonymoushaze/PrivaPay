"use client";
import React from "react";
import LeaveApplyModal from "./leave-apply-modal";
import CustomDatePicker from "../calender.component";
import Button from "../button.component";

const leaveDates = [
  {
    date: "Jan 2 , 2022",
    status: "approved",
  },
  {
    date: "Jan 18 , 2022",
    status: "pending",
  },
];

const LeaveSection = () => {
  const [openLeaveModal, setOpenLeaveModal] = React.useState(false);
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div className="w-[360px] flex flex-col gap-6  h-fit justify-center">
          <CustomDatePicker viewOnly />
          <div className="flex justify-between items-center gap-6">
            <div className="text-sm font-semibold">Applying for leave?</div>
            <Button onClick={() => setOpenLeaveModal(true)}>Apply leave</Button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-gray-400">
              Your leaves this month
            </div>
            <div className="flex flex-col divide-y-[1px] divide-gray-900">
              {leaveDates.length === 0 && (
                <div className="text-xs py-3 text-gray-400">
                  No leaves taken this month
                </div>
              )}
              {leaveDates.map((date) => (
                <div
                  key={date.date}
                  className={`flex items-center gap-2 justify-between text-xs py-3`}
                >
                  <span>{date.date}</span>
                  <span>2 days</span>
                  <span
                    className={`px-2 py-1 min-w-[96px] flex justify-center text-xs rounded-full border uppercase ${
                      date.status === "approved"
                        ? "border-green-400 bg-green-400/20"
                        : "border-orange-400 bg-yellow-400/20"
                    }`}
                  >
                    {date.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <LeaveApplyModal
        open={openLeaveModal}
        close={() => setOpenLeaveModal(false)}
      />
    </React.Fragment>
  );
};

export default LeaveSection;
