import React from "react";
import {
  CCardBody,
  CButton,
  CCard,
  CCardTitle,
  CCardImage,
} from "@coreui/react";

export const TopicCard = () => {
  return (
    <div>
      <CCard style={{ width: "18rem", fontFamily: "sans-serif" }}>
        <CCardImage
          style={{ height: "240px" }}
          src="https://www.thoughtco.com/thmb/ZBTtHM-EBdcwG9YlaeQapyh6jYI=/1500x1000/filters:fill(auto,1)/Businesswoman-Greeting-58d042b45f9b581d7210dcfb.jpg"
        />
        <CCardBody>
          <CCardTitle>Greetings</CCardTitle>
          <CButton href="https://www.youtube.com/watch?v=ocPYue7Z-jY">
            Watch video
          </CButton>
        </CCardBody>
      </CCard>
      <br></br>
      <CCard style={{ width: "18rem", fontFamily: "sans-serif" }}>
        <CCardImage
          style={{ height: "240px" }}
          src="https://tse4.mm.bing.net/th?id=OIP.VITbMFwOOyZhOREnIANbOgHaFj&pid=Api"
        />
        <CCardBody>
          <CCardTitle>Introducing yourself</CCardTitle>
          <CButton href="https://www.youtube.com/watch?v=UnEmEbWytI8">
            Watch video
          </CButton>
        </CCardBody>
      </CCard>
      <br></br>
      <CCard style={{ width: "18rem", fontFamily: "sans-serif" }}>
        <CCardImage
          style={{ height: "240px" }}
          src="https://www.blogherald.com/wp-content/uploads/2017/06/odd-numbers.jpg"
        />
        <CCardBody>
          <CCardTitle>Numbers</CCardTitle>
          <CButton href="https://www.youtube.com/watch?v=D4eJ5kg28nU">
            Watch video
          </CButton>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default TopicCard;
