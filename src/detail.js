import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: #333;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
`;

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [tab, setTab] = useState(0);
  let { id } = useParams();
  let [fade2, setFade2] = useState("");
  id = parseInt(id);

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, []);

  return (
    <div className={"container start " + fade2}>
      {alert === true ? (
        <div className="alert alert-warning">2초 이내 구매 시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          {/* 이미지 경로 수정 */}
          <img
            src={props.skins[id].img}
            className="detail-img"
            width="500px"
            height="400px"
            alt={props.skins[id].title}
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.skins[id].title}</h4>
          <p>{props.skins[id].content}</p>
          <p>{props.skins[id].price}원</p>
          <YellowBtn
            onClick={() => {
              setCount(count + 1);
            }}
            bg="#dacaa0"
          >
            주문하기
          </YellowBtn>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="/link-0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link-0"
          >
            Option 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link-1"
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link-2"
          >
            Option 3
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CustomTab tab={tab} />
    </div>
  );
}

function CustomTab({ tab }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tab]}
    </div>
  );
}

export default Detail;
