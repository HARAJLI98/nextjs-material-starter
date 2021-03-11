import { FC } from "react";
import { NextPage } from "next";
import { Container, Typography } from "@material-ui/core";

const Index: FC<NextPage> = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h2">
          <strong>Next.js v10.0.8</strong>
        </Typography>
      </div>
    </Container>
  );
};

export default Index;
