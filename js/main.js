import { swiper } from "./swiper.js";
import {
  createSubmitEvent,
  createLoginEvent,
  authLogin,
  getItemWithExpireTime,
} from "./signup.js";

const firstNav = document.querySelector("ul.nav-1depth > li:first-child");
const backGround = document.querySelector(".back-ground");
export const loginBtnEl = document.querySelector(".login");
const loginModal = document.querySelector(".login-modal");
const signupModal = document.querySelector(".signup-modal");

// signup elements
export const emailInputEl = document.getElementById("signup-email");
export const passwordInputEl = document.getElementById("signup-pw");
export const passwordcheckEl = document.getElementById("signup-repw");
export const displayNameInputEl = document.getElementById("signup-name");
export const submitEl = document.getElementById("frm");

// login elements
export const loginId = document.querySelector(".login-id");
export const loginPw = document.querySelector(".login-pw");
export const loginBtn = document.querySelector(".login-btn");
export const idboxEl = document.querySelector(".id-box");
export const pwboxEl = document.querySelector(".pw-box");
export const loginErrorBox = document.querySelector(".login-error-box");

// 카테고리 드롭다운 visibility 조정
firstNav.addEventListener("mouseover", () => {
  backGround.style.visibility = "visible";
});
firstNav.addEventListener("mouseout", () => {
  backGround.style.visibility = "hidden";
});

// 로그인/회원가입 모달 visibility 조정
loginBtnEl.addEventListener("click", () => {
  if (loginBtnEl.textContent === "로그인/가입") {
    backGround.style.visibility = "visible";
    loginModal.style.visibility = "visible";
    document.querySelector(".close-login").addEventListener("click", () => {
      backGround.style.visibility = "hidden";
      loginModal.style.visibility = "hidden";
    });
    document.querySelector(".signup").addEventListener("click", () => {
      signupModal.style.visibility = "visible";
      loginModal.style.visibility = "hidden";
      document.querySelector(".close-signup").addEventListener("click", () => {
        backGround.style.visibility = "hidden";
        signupModal.style.visibility = "hidden";
      });
    });
  }
});

submitEl.addEventListener("submit", createSubmitEvent);
loginBtn.addEventListener("click", createLoginEvent);

// 로컬에 로그인 데이터 있는지 확인.
(async () => {
  await authLogin();
  // 만료시간 체크는 계속
  getItemWithExpireTime("token");
})();

// 초기화면(새로고침, 화면진입) 렌더
router();

// 이후로는 hashchange(페이지이동)때 렌더
window.addEventListener("hashchange", router);

// 라우팅
async function router() {
  const routePath = location.hash;
  // 초기화면
  if (routePath === "") {
  } else if (routePath.includes("#/user")) {
    // 기존꺼 hide하고 갈기면됨
  }
}
