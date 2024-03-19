import { Box, Stack, Typography } from "@mui/material";
import Gym from "../assets/gym.png";

const BodyParts = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        borderBottomLeftRadius: "20px",
        cursor: "pointer",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Gym} alt="All" style={{ width: "40px", height: "40px" }} />{" "}
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        All
      </Typography>
    </Stack>
  );
};

export default BodyParts;
