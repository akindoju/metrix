import { FC } from "react";
import "./Header.scss";
import profile from "../../assets/profile.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsSidebarMinimized,
  setIsSidebarOpen,
} from "../../redux/slices/generalSlice";
import { useLocation } from "react-router-dom";

export const Header: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const isSidebarOpen = useSelector(
    (state: { general: { isSidebarOpen: boolean } }) =>
      state.general.isSidebarOpen
  );

  return (
    <div className="header">
      <div className="header__main">
        <p className="page-title">
          {path !== "/conversations" ? "Dashboard" : "Conversations"}
        </p>

        <div className="header__main--right">
          <div className="header__main--right-dropdown">
            <p>Nanny's Shop</p>

            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#1C1D22"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="header__main--right-notification"
          >
            <path
              d="M16.4746 9.70444C15.8659 8.99357 15.5892 8.37753 15.5892 7.33095V6.9751C15.5892 5.61127 15.2754 4.73254 14.5929 3.85382C13.5411 2.48915 11.7703 1.66666 10.0369 1.66666H9.96317C8.26615 1.66666 6.55091 2.45138 5.48085 3.76066C4.76113 4.65701 4.41079 5.5735 4.41079 6.9751V7.33095C4.41079 8.37753 4.15239 8.99357 3.52543 9.70444C3.06411 10.2281 2.91669 10.9012 2.91669 11.6297C2.91669 12.3591 3.15604 13.0498 3.63641 13.6113C4.26337 14.2844 5.14873 14.7141 6.05315 14.7888C7.36256 14.9382 8.67197 14.9944 10.0004 14.9944C11.3281 14.9944 12.6375 14.9004 13.9477 14.7888C14.8513 14.7141 15.7367 14.2844 16.3636 13.6113C16.8432 13.0498 17.0834 12.3591 17.0834 11.6297C17.0834 10.9012 16.9359 10.2281 16.4746 9.70444Z"
              fill="#5570F1"
            />
            <path
              opacity="0.4"
              d="M11.6739 16.0236C11.2573 15.9347 8.71882 15.9347 8.30223 16.0236C7.9461 16.1059 7.56097 16.2972 7.56097 16.7169C7.58168 17.1172 7.81607 17.4706 8.14073 17.6946L8.1399 17.6955C8.5598 18.0228 9.05259 18.2309 9.56857 18.3056C9.84354 18.3434 10.1235 18.3417 10.4084 18.3056C10.9235 18.2309 11.4163 18.0228 11.8362 17.6955L11.8354 17.6946C12.1601 17.4706 12.3945 17.1172 12.4152 16.7169C12.4152 16.2972 12.03 16.1059 11.6739 16.0236Z"
              fill="#5570F1"
            />
          </svg>

          <img
            src={profile}
            alt="Profile Image"
            className="header__main--right-profile"
          />
        </div>
      </div>

      <div className="header__mobile">
        <div className="logo">
          <svg
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5074 12.037C22.6177 12.2616 22.6906 12.5021 22.7233 12.7494L23.3265 21.7192L23.626 26.2277C23.6291 26.6913 23.7018 27.152 23.8419 27.5948C24.2035 28.4539 25.0736 28.9999 26.0202 28.9618L40.4443 28.0184C41.0689 28.0081 41.6721 28.2417 42.1211 28.6678C42.4953 29.0229 42.7369 29.4874 42.813 29.987L42.8385 30.2904C42.2416 38.5556 36.1713 45.4494 27.9232 47.229C19.6751 49.0086 11.2171 45.2493 7.14128 37.9923C5.96625 35.884 5.23232 33.5666 4.98257 31.1761C4.87824 30.4685 4.8323 29.7538 4.8452 29.0389C4.83232 20.1776 11.1426 12.5168 19.9758 10.6699C21.0389 10.5044 22.0811 11.0672 22.5074 12.037Z"
              fill="#97A5EB"
            />
            <path
              opacity="0.4"
              d="M28.3948 4.33512C38.2745 4.58647 46.5781 11.6909 48.1764 21.26L48.1612 21.3306L48.1176 21.4333L48.1236 21.7151C48.101 22.0886 47.9568 22.4478 47.7084 22.7381C47.4495 23.0404 47.0959 23.2462 46.7065 23.3261L46.4691 23.3587L29.8274 24.437C29.2738 24.4916 28.7227 24.3131 28.311 23.9459C27.968 23.6399 27.7487 23.2269 27.6867 22.7818L26.5697 6.16431C26.5503 6.10812 26.5503 6.04721 26.5697 5.99102C26.585 5.53297 26.7866 5.1 27.1295 4.78884C27.4725 4.47769 27.9282 4.31428 28.3948 4.33512Z"
              fill="#FFCC91"
            />
          </svg>

          <p>Metrix</p>
        </div>

        {isSidebarOpen ? (
          <svg
            className="header__mobile--menu"
            onClick={() => {
              dispatch(setIsSidebarOpen(false));
            }}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>clear</title>
            <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
          </svg>
        ) : (
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="header__mobile--menu"
            onClick={() => {
              dispatch(setIsSidebarOpen(true));
              dispatch(setIsSidebarMinimized(false));
            }}
          >
            <title>menu</title>
            <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
          </svg>
        )}
      </div>

      <div className="header__sub">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.09581 12.8548V10.8102C5.0958 10.2921 5.5171 9.87115 6.03895 9.86789H7.95506C8.47924 9.86789 8.90417 10.2898 8.90417 10.8102V12.8488C8.90416 13.2982 9.26934 13.6634 9.72195 13.6667H11.0292C11.6397 13.6682 12.2258 13.4285 12.6581 13.0005C13.0904 12.5724 13.3333 11.9912 13.3333 11.385V5.57724C13.3333 5.0876 13.1147 4.62315 12.7364 4.30901L8.29531 0.782856C7.519 0.166092 6.41024 0.186016 5.65692 0.830266L1.31133 4.30901C0.91515 4.61389 0.678358 5.07972 0.666656 5.57724V11.3791C0.666656 12.6425 1.69824 13.6667 2.97077 13.6667H4.24818C4.4661 13.6682 4.67565 13.5834 4.8303 13.431C4.98496 13.2785 5.07194 13.0711 5.07193 12.8548H5.09581Z"
            fill="#5570F1"
          />
        </svg>

        {path === "/conversations" ? (
          <p>
            <span>/</span> Conversations
          </p>
        ) : null}
      </div>
    </div>
  );
};
