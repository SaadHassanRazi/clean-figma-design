import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IndexField from "./IndexField"; // Assuming this is your custom input component.
import Button from "./Button";
import { Cancel } from "@mui/icons-material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "397px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const ReusableModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Cancel
          sx={{
            float: "inline-end",
            position: "relative",
            top: "-20px",
            left: "10px",
          }}
        />
        <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          Filter Employee
        </Typography>
        <div className="flex flex-col justify-around gap-y-3">
          <IndexField
            sx={
              "w-[340px] h-[50px] text-[14px] text-start ps-4 rounded-[10px] border-[#CECECE] bg-[#F9F9F9]"
            }
            placeholder="Enter employee name"
            type="text"
          />
          <IndexField
            sx={
              "w-[340px] h-[50px] text-[14px] text-start ps-4 rounded-[10px] border-[#CECECE] bg-[#F9F9F9]"
            }
            placeholder="Current location"
            type="text"
          />
          <IndexField
            sx={
              "w-[340px] h-[50px] text-[14px] text-start ps-4 rounded-[10px] border-[#CECECE] bg-[#F9F9F9]"
            }
            placeholder="Availability"
            type="text"
          />
          <Button
            label={"Apply Filter"}
            className={"bg-[#06726A] text-white"}
          />
          <Button label={"Cancel"} className={"text-[#06726A]"} />
        </div>
      </Box>
    </Modal>
  );
};

export default ReusableModal;
