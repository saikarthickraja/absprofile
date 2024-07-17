import { Typography, Container, Link } from "@mui/material";
import NextLink from "next/link";

const Home = () => {
  return (
    <Container sx={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        ABS hrms - Welcome to My Profile Page
      </Typography>
      <NextLink href="/profile" passHref>
        <Link
          variant="button"
          sx={{
            fontSize: "1.2rem",
            textDecoration: "none",
            color: "#1976d2",
            marginTop: "20px",
            display: "block",
          }}
        >
          Go to Profile
        </Link>
      </NextLink>
    </Container>
  );
};

export default Home;
