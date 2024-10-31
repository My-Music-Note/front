import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  console.log(user); // 추후 사용을 위해 콘솔에 출력하여 경고 제거

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUser(decoded);
    // 로그인 성공 시 메인 화면으로 이동
    navigate("/main");
  };

  const handleLoginFailure = (error) => {
    console.error("Google 로그인 실패:", error);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="app">
        <div className="container">
          <h1>My Music Note</h1>
          <h2>시작하기</h2>

          <div className="feature">
            <img
              src="https://em-content.zobj.net/source/apple/391/memo_1f4dd.png"
              alt="pencil"
            />
            <div>
              <h3>작성 내용 기반 음악 생성</h3>
              <p>작성한 일기와 질문답변을 기반으로 적합한 음악이 생성됩니다.</p>
            </div>
          </div>

          <div className="feature">
            <img
              src="https://em-content.zobj.net/source/apple/391/sun_2600-fe0f.png"
              alt="sun"
            />
            <div>
              <h3>우울증 자가진단</h3>
              <p>
                우울감과 관련한 인지적, 정서적, 신체적 증상에 대한 검사를 할 수
                있습니다.
              </p>
            </div>
          </div>

          <div className="feature">
            <img
              src="https://em-content.zobj.net/source/apple/391/pill_1f48a.png"
              alt="pill"
            />
            <div>
              <h3>약 백과사전 & 복용 시간 알림이</h3>
              <p>
                현재 복용 중인 약의 효과와 성분을 찾아보고, 복용 시간을 정하여
                알려줍니다.
              </p>
            </div>
          </div>

          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
            text="signin_with"
            className="google-login-button"
          />
          <button
            onClick={() => navigate("/main")}
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            비회원으로 로그인하기
          </button>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default LoginPage;
