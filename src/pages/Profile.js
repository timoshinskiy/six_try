import React, {useState} from "react";
import Header from "../components/Header";
import {Container} from "@mui/material";

const Profile = () => {
    const [order] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);

  return(
      <>
          <Header
              handleCart={() => setCartOpen(true)}
              orderLen={order.length}
          />
          <Container
              sx={{
                  mt: '1rem'
              }}
          >

          </Container>
      </>
  );
}
export default Profile;