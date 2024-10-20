import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import data from "./data.js";
import Detail from "./detail.js";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {
  let [skins, setSkins] = useState(data);

  // 정렬 기준 상태 추가
  const [sortOrder, setSortOrder] = useState("default");

  // 정렬 함수
  const sortSkins = () => {
    let sortedSkins = [...skins];

    if (sortOrder === "alphabetical") {
      sortedSkins.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "price") {
      sortedSkins.sort((a, b) => a.price - b.price);
    }

    return sortedSkins;
  };

  // 정렬 버튼 클릭 핸들러
  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  return (
    <div className="App">
      {/* 네비게이션 바 */}
      <Navbar bg="light" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            Shop
          </Navbar.Brand>
          <Nav className="me-auto navbar-nav">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/detail" className="nav-link">
              Detail
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing" className="nav-link">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 메인 배경 */}
      <div className="main-bg"></div>

      {/* 라우팅 처리 */}
      <Routes>
        <Route path="/detail/:id" element={<Detail skins={skins} />} />
        {/* 기본 경로일 때 Card 목록 보여주기 */}
        <Route
          path="/"
          element={
            <div className="container">
              <div className="d-flex justify-content-end mb-3">
                <button
                  onClick={() => handleSortChange("alphabetical")}
                  className="btn btn-secondary me-2"
                >
                  가나다 순
                </button>
                <button
                  onClick={() => handleSortChange("price")}
                  className="btn btn-secondary"
                >
                  가격 순
                </button>
              </div>
              <div className="row">
                {sortSkins().map((skin) => (
                  <Card skins={skin} key={skin.id} />
                ))}
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <Link to={`/detail/${props.skins.id}`} className="card-link">
        <img
          src={props.skins.img}
          width="300px"
          className="skins-img"
          height="250px"
          alt="product"
        />
        <h3 className="skins-title">{props.skins.title}</h3>
      </Link>
      <p className="skins-price">{props.skins.price}원</p>
      <p className="skins-content">{props.skins.content}</p>
    </div>
  );
}

export default App;
