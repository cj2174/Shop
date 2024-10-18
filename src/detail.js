import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: #333;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
`;

function Detail(props) {
  let { id } = useParams();
  id = parseInt(id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={props.images[id]} width="500px" height="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.skins[id].title}</h4>
          <p>{props.skins[id].content}</p>
          <p>{props.skins[id].price}</p>
          <YellowBtn bg="#dacaa0">주문하기</YellowBtn>
        </div>
      </div>
    </div>
  );
}

export default Detail;
