import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

export const ExerciseCard = ({ exercises }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercises.id}`}>
      <img src={""} alt={exercises.name} loading="lazy" />

      <Stack>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercises.type}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercises.difficulty}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        colot="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercises.name}
      </Typography>
    </Link>
  );
};
