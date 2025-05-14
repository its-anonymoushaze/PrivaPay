"use client";
import React from "react";
import Button from "../button.component";
import Input from "../input.component";
import Modal, { CustomModalProps } from "../modal.component";
import Select from "../select.component";
import Textarea from "../textarea.component";
import { ILeaveInfo, LEAVETYPE } from "@/constants/leave";
import { requestLeave } from "@/services/leave";

const LeaveApplyModal = ({ open, close }: CustomModalProps) => {
  const [leaveInfo, setLeaveInfo] = React.useState<ILeaveInfo | null>(null);

  const handleLeaveSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(leaveInfo);
    try {
      await requestLeave(leaveInfo as ILeaveInfo);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal
      open={open}
      close={close}
      title="Apply For Leave"
      description="Fill up this form to send email for leave application"
    >
      <form onSubmit={handleLeaveSubmit} className="flex flex-col gap-4 w-full">
        <div className="flex gap-4 w-full">
          <Input
            label="Start Date"
            type="date"
            required
            className="dark:[color-scheme:dark]"
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) =>
              setLeaveInfo(
                (prev) => ({ ...prev, startDate: e.target.value } as ILeaveInfo)
              )
            }
          />
          <Input
            label="End Date"
            type="date"
            required
            className="dark:[color-scheme:dark]"
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) =>
              setLeaveInfo(
                (prev) => ({ ...prev, endDate: e.target.value } as ILeaveInfo)
              )
            }
          />
        </div>
        <Select
          title="Leave Type"
          required
          onhandleChange={(e) =>
            setLeaveInfo(
              (prev) => ({ ...prev, leaveType: e.target.value } as ILeaveInfo)
            )
          }
          options={Object.values(LEAVETYPE).map((type) => ({
            value: type,
            label: type,
          }))}
        />
        <Textarea
          label="Reason"
          required
          onChange={(e) =>
            setLeaveInfo(
              (prev) =>
                ({
                  ...prev,
                  reason: e.target.value,
                } as ILeaveInfo)
            )
          }
        />
        <Button type="submit">Send Application</Button>
      </form>
    </Modal>
  );
};

export default LeaveApplyModal;
