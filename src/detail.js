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

function Detail({ skins }) {
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
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const currentSkin = skins.find((skin) => skin.id === id);

  if (!currentSkin) {
    return <div>해당 제품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className={"container start " + fade2}>
      {alert && (
        <div className="alert alert-warning">2초 이내 구매 시 할인</div>
      )}
      <div className="row">
        <div className="col-md-6">
          <img
            src={currentSkin.img}
            className="detail-img"
            width="500px"
            height="400px"
            alt={currentSkin.title}
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{currentSkin.title}</h4>
          <p>{currentSkin.content}</p>
          <p>{currentSkin.price}원</p>
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

      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link onClick={() => setTab(0)} eventKey="link-0">
            Products
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(1)} eventKey="link-1">
            Price
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(2)} eventKey="link-2">
            Detail
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <CustomTab tab={tab} currentSkin={currentSkin} />
    </div>
  );
}

function CustomTab({ tab, currentSkin }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    let timeout = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(timeout);
      setFade("");
    };
  }, [tab]);

  const tabContent = [
    <div>제품명 : {currentSkin.title}</div>,
    <div>가격 : {currentSkin.price}원</div>,
    <div>설명 : {currentSkin.content}</div>,
  ];

  return <div className={`start ${fade}`}>{tabContent[tab]}</div>;
}

export default Detail;
