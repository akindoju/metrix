import { FC } from "react";
import "./Sidebar.scss";
import profile from "../../assets/profile.png";
import { useLocation, useNavigate } from "react-router-dom";
import {
  setIsSidebarOpen,
  setIsConversationsCleared,
  setIsSidebarMinimized,
} from "../../redux/slices/generalSlice";
import { useDispatch, useSelector } from "react-redux";

export const Sidebar: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const isConversationsCleared = useSelector(
    (state: { general: { isConversationsCleared: boolean } }) =>
      state.general.isConversationsCleared
  );

  const isSidebarMinimized = useSelector(
    (state: { general: { isSidebarMinimized: boolean } }) =>
      state.general.isSidebarMinimized
  );

  return (
    <div className={isSidebarMinimized ? "minimized sidebar" : "sidebar"}>
      <div className="logo sidebar__logo">
        <div className="logo sidebar__logo--main">
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

        {!isSidebarMinimized ? (
          <svg
            className="sidebar__logo--sidebar"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            onClick={() => dispatch(setIsSidebarMinimized(true))}
          >
            <title>minimize sidebar</title>
            <path d="M7.050 9.293l-0.707 0.707 5.657 5.657 1.414-1.414-4.242-4.243 4.242-4.243-1.414-1.414z"></path>
          </svg>
        ) : (
          <svg
            className="sidebar__logo--sidebar"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            onClick={() => dispatch(setIsSidebarMinimized(false))}
          >
            <title>maximize sidebar</title>
            <path d="M12.95 10.707l0.707-0.707-5.657-5.657-1.414 1.414 4.242 4.243-4.242 4.243 1.414 1.414 4.95-4.95z"></path>
          </svg>
        )}
      </div>

      <div className="sidebar__top">
        <div className="sidebar__top--dropdown">
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

        <div className="sidebar__top--right">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sidebar__top--right-notification"
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
            className="sidebar__top--right-profile"
          />
        </div>
      </div>

      <div className="sidebar__main">
        <div className="sidebar__main--pages">
          <div
            onClick={() => {
              navigate("dashboard");
              dispatch(setIsSidebarOpen(false));
            }}
            className={
              path !== "/conversations"
                ? `sidebar__main--pages-page sidebar__main--pages-page-active`
                : `sidebar__main--pages-page`
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>Dashboard</p>
          </div>

          <div className="sidebar__main--pages-page">
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.5137 20.5H6.16592C3.09955 20.5 0.747152 19.3924 1.41534 14.9348L2.19338 8.89357C2.60528 6.66931 4.02404 5.81805 5.26889 5.81805H15.4474C16.7105 5.81805 18.0469 6.73339 18.5229 8.89357L19.3009 14.9348C19.8684 18.889 17.5801 20.5 14.5137 20.5Z"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.651 5.59839C14.651 3.21232 12.7167 1.27802 10.3307 1.27802V1.27802C9.18168 1.27315 8.07807 1.72618 7.26388 2.53694C6.44969 3.34769 5.99199 4.44938 5.992 5.59839H5.992"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.2963 10.1018H13.2506"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.46572 10.1018H7.41995"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>Orders</p>

            <div className={isSidebarMinimized ? "minimized__counter" : ""}>
              3
            </div>
          </div>

          <div className="sidebar__main--pages-page">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.59151 13.2068C11.2805 13.2068 14.4335 13.7658 14.4335 15.9988C14.4335 18.2318 11.3015 18.8068 7.59151 18.8068C3.90151 18.8068 0.749512 18.2528 0.749512 16.0188C0.749512 13.7848 3.88051 13.2068 7.59151 13.2068Z"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.59151 10.0198C5.16951 10.0198 3.20551 8.0568 3.20551 5.6348C3.20551 3.2128 5.16951 1.2498 7.59151 1.2498C10.0125 1.2498 11.9765 3.2128 11.9765 5.6348C11.9855 8.0478 10.0355 10.0108 7.62251 10.0198H7.59151Z"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.4831 8.8816C16.0841 8.6566 17.3171 7.2826 17.3201 5.6196C17.3201 3.9806 16.1251 2.6206 14.5581 2.3636"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5954 12.7322C18.1464 12.9632 19.2294 13.5072 19.2294 14.6272C19.2294 15.3982 18.7194 15.8982 17.8954 16.2112"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>Customers</p>
          </div>

          <div className="sidebar__main--pages-page">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.4189 14.7321C20.4189 18.3101 18.3099 20.4191 14.7319 20.4191H6.94988C3.36288 20.4191 1.24988 18.3101 1.24988 14.7321V6.93211C1.24988 3.35911 2.56388 1.25011 6.14288 1.25011H8.14288C8.86088 1.25111 9.53688 1.58811 9.96688 2.16311L10.8799 3.37711C11.3119 3.95111 11.9879 4.28911 12.7059 4.29011H15.5359C19.1229 4.29011 20.4469 6.11611 20.4469 9.76711L20.4189 14.7321Z"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.48096 13.463H15.216"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>Inventory</p>
          </div>

          <div
            onClick={() => {
              navigate("conversations");
              dispatch(setIsConversationsCleared(true));
              dispatch(setIsSidebarOpen(false));
            }}
            className={
              path === "/conversations"
                ? `sidebar__main--pages-page sidebar__main--pages-page-active`
                : `sidebar__main--pages-page`
            }
          >
            {path !== "/conversations" ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.0714 18.0699C15.0152 21.1263 10.4898 21.7867 6.78642 20.074C6.23971 19.8539 5.79148 19.676 5.36537 19.676C4.17849 19.683 2.70117 20.8339 1.93336 20.067C1.16555 19.2991 2.31726 17.8206 2.31726 16.6266C2.31726 16.2004 2.14642 15.7602 1.92632 15.2124C0.212831 11.5096 0.874109 6.98269 3.93026 3.92721C7.8316 0.0244319 14.17 0.0244322 18.0714 3.9262C21.9797 7.83501 21.9727 14.1681 18.0714 18.0699Z"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.9394 11.413H14.9484"
                  stroke="#53545C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.9304 11.413H10.9394"
                  stroke="#53545C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.9214 11.413H6.9304"
                  stroke="#53545C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M10.02 0C4.21 0 0 4.74 0 10C0 11.68 0.49 13.41 1.35 14.99C1.51 15.25 1.53 15.58 1.42 15.89L0.75 18.13C0.6 18.67 1.06 19.07 1.57 18.91L3.59 18.31C4.14 18.13 4.57 18.36 5.081 18.67C6.541 19.53 8.36 19.97 10 19.97C14.96 19.97 20 16.14 20 9.97C20 4.65 15.7 0 10.02 0Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.98049 11.2901C9.27049 11.2801 8.70049 10.7101 8.70049 10.0001C8.70049 9.3001 9.28049 8.7201 9.98049 8.7301C10.6905 8.7301 11.2605 9.3001 11.2605 10.0101C11.2605 10.7101 10.6905 11.2901 9.98049 11.2901ZM5.37009 11.2901C4.67009 11.2901 4.09009 10.7101 4.09009 10.0101C4.09009 9.3001 4.66009 8.7301 5.37009 8.7301C6.08009 8.7301 6.65009 9.3001 6.65009 10.0101C6.65009 10.7101 6.08009 11.2801 5.37009 11.2901ZM13.3103 10.0101C13.3103 10.7101 13.8803 11.2901 14.5903 11.2901C15.3003 11.2901 15.8703 10.7101 15.8703 10.0101C15.8703 9.3001 15.3003 8.7301 14.5903 8.7301C13.8803 8.7301 13.3103 9.3001 13.3103 10.0101Z"
                  fill="white"
                />
              </svg>
            )}

            <p>Conversations</p>

            {!isConversationsCleared ? (
              <div className={isSidebarMinimized ? "minimized__counter" : ""}>
                16
              </div>
            ) : null}
          </div>

          <div className="sidebar__main--pages-page">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8067 6.62357L18.1842 5.54348C17.6577 4.62956 16.4907 4.31427 15.5755 4.83867V4.83867C15.1399 5.0953 14.6201 5.16811 14.1307 5.04104C13.6413 4.91398 13.2226 4.59747 12.9668 4.16133C12.8023 3.8841 12.7139 3.56835 12.7105 3.24599V3.24599C12.7254 2.72918 12.5304 2.22836 12.17 1.85762C11.8096 1.48689 11.3145 1.27782 10.7975 1.27803H9.5435C9.03697 1.27802 8.55131 1.47987 8.194 1.8389C7.83669 2.19793 7.63717 2.68455 7.63961 3.19107V3.19107C7.6246 4.23688 6.77248 5.07677 5.72657 5.07666C5.40421 5.07331 5.08846 4.9849 4.81123 4.82036V4.82036C3.89606 4.29597 2.72911 4.61125 2.20254 5.52517L1.53435 6.62357C1.00841 7.53635 1.3194 8.70256 2.23 9.23226V9.23226C2.8219 9.57399 3.18653 10.2055 3.18653 10.889C3.18653 11.5725 2.8219 12.204 2.23 12.5458V12.5458C1.32056 13.0719 1.00923 14.2353 1.53435 15.1453V15.1453L2.16593 16.2346C2.41265 16.6797 2.8266 17.0082 3.31619 17.1474C3.80578 17.2865 4.33064 17.2249 4.77462 16.976V16.976C5.21108 16.7213 5.73119 16.6515 6.21934 16.7822C6.70749 16.9128 7.12324 17.233 7.37416 17.6716C7.5387 17.9488 7.62711 18.2646 7.63046 18.587V18.587C7.63046 19.6435 8.48696 20.5 9.5435 20.5H10.7975C11.8505 20.5 12.7055 19.6491 12.7105 18.5961V18.5961C12.7081 18.088 12.9089 17.6 13.2682 17.2407C13.6275 16.8814 14.1155 16.6806 14.6236 16.6831C14.9452 16.6917 15.2596 16.7797 15.5389 16.9394V16.9394C16.4517 17.4653 17.6179 17.1543 18.1476 16.2437V16.2437L18.8067 15.1453C19.0618 14.7075 19.1318 14.186 19.0012 13.6963C18.8706 13.2067 18.5502 12.7893 18.111 12.5366V12.5366C17.6718 12.2839 17.3514 11.8665 17.2208 11.3769C17.0902 10.8873 17.1603 10.3658 17.4154 9.92792C17.5812 9.63829 17.8214 9.39815 18.111 9.23226V9.23226C19.0161 8.70285 19.3264 7.54345 18.8067 6.63272V6.63272V6.62357Z"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="10.1751"
                cy="10.889"
                r="2.63616"
                stroke="#53545C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>Settings</p>
          </div>
        </div>

        <div className="sidebar__main--options">
          <div className="sidebar__main--options-option-1 sidebar__main--options-option">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>Contact Support</p>
          </div>

          <div className="sidebar__main--options-option-2 sidebar__main--options-option">
            <div className="sidebar__main--options-option-2-top">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12V22H4V12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 7H2V12H22V7Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22V7"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>Free Gift Awaits You!</p>
            </div>

            <div className="sidebar__main--options-option-2-bottom">
              <p>Upgrade your account</p>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#6E7079"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="sidebar__main--options-logout sidebar__main--options-option">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M2 6.447C2 3.996 4.03024 2 6.52453 2H11.4856C13.9748 2 16 3.99 16 6.437V17.553C16 20.005 13.9698 22 11.4744 22H6.51537C4.02515 22 2 20.01 2 17.563V16.623V6.447Z"
                fill="#CC5F5F"
              />
              <path
                d="M21.7789 11.4548L18.9331 8.5458C18.639 8.2458 18.1657 8.2458 17.8725 8.5478C17.5803 8.8498 17.5813 9.3368 17.8745 9.6368L19.4337 11.2298H17.9387H9.54844C9.13452 11.2298 8.79852 11.5748 8.79852 11.9998C8.79852 12.4258 9.13452 12.7698 9.54844 12.7698H19.4337L17.8745 14.3628C17.5813 14.6628 17.5803 15.1498 17.8725 15.4518C18.0196 15.6028 18.2114 15.6788 18.4043 15.6788C18.5952 15.6788 18.787 15.6028 18.9331 15.4538L21.7789 12.5458C21.9201 12.4008 22 12.2048 22 11.9998C22 11.7958 21.9201 11.5998 21.7789 11.4548Z"
                fill="#CC5F5F"
              />
            </svg>

            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};
