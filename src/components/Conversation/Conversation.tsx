import { FC } from "react";
import "./Conversation.scss";
import gold from "../../assets/gold.png";
import jane from "../../assets/jane.png";
import { useDispatch } from "react-redux";
import { setIsMessageOpen } from "../../redux/slices/generalSlice";

export const Conversation: FC<{
  user: {
    image: string;
    name: string;
    new: boolean;
    active: boolean;
  };
}> = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div className="conversation">
      <div className="conversation__header">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          onClick={() => dispatch(setIsMessageOpen(false))}
          className="conversation__header--go-back"
        >
          <title>arrow-left2</title>
          <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
        </svg>

        <img src={user.image ? user.image : jane} alt="User Image" />

        <div className="conversation__header--text">
          <div className="conversation__header--text-top">
            <p className="conversation__header--text-top-name">
              {user.name ? user.name : "Jane Doe"}
            </p>

            <div className="conversation__header--text-top-right">
              {user.new && (
                <div className="conversation__header--text-top-right-new">
                  <p>New Customer</p>
                </div>
              )}

              <button>View Profile</button>
            </div>
          </div>

          <div className="conversation__header--text-bottom">
            <div className="conversation__header--text-bottom-left">
              {user.active && (
                <>
                  <div />
                  <p className="conversation__header--text-bottom-left-online">
                    Online
                  </p>
                </>
              )}

              <p className="conversation__header--text-bottom-left-time">
                12:55 am
              </p>
            </div>

            <div className="conversation__header--text-bottom-orders">
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7615 17.4167H4.80495C2.24965 17.4167 0.289314 16.4937 0.84614 12.779L1.4945 7.74466C1.83775 5.89111 3.02005 5.18173 4.05743 5.18173H12.5395C13.5921 5.18173 14.7058 5.94451 15.1024 7.74466L15.7508 12.779C16.2237 16.0742 14.3168 17.4167 11.7615 17.4167Z"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.8758 4.99865C11.8758 3.01026 10.2639 1.39835 8.27547 1.39835V1.39835C7.31797 1.39429 6.3983 1.77182 5.71981 2.44744C5.04131 3.12307 4.6599 4.04114 4.65991 4.99865H4.65991"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.7469 8.75151H10.7088"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.88801 8.75151H5.84987"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>0 Orders</p>
            </div>
          </div>
        </div>
      </div>

      <div className="conversation__body">
        <div className="conversation__body--date">
          <p>12 August 2022</p>
        </div>

        <div className="conversation__body--left">
          <div className="conversation__body--left-quoted">
            <img
              src={gold}
              alt="Quoted Order"
              className="conversation__body--left-quoted-img"
            />

            <div className="conversation__body--left-quoted-text">
              <p className="conversation__body--left-quoted-text-top">
                iPhone 13
              </p>

              <div className="conversation__body--left-quoted-text-bottom">
                <p className="conversation__body--left-quoted-text-bottom-price">
                  ₦730,000.00
                </p>

                <p className="conversation__body--left-quoted-text-bottom-count">
                  <span>12</span> in stock
                </p>
              </div>
            </div>
          </div>

          <div className="conversation__body--left-message">
            <div>
              <p>Hello, I want to make enquiries about your products</p>
            </div>

            <p className="conversation__body--left-message-time">12:55 am</p>
          </div>
        </div>

        <div className="conversation__body--right">
          <div className="conversation__body--right-message">
            <p>Hello {user.name.split(" ")[0]}, thank you for reaching out</p>
          </div>

          <div className="conversation__body--right-time">
            <p>12:57 am</p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" rx="10" fill="#FFEAD1" />
              <path
                d="M14 7L8.5 12.5L6 10"
                stroke="#1C1D22"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="conversation__body--right">
          <div className="conversation__body--right-message">
            <p>What do you need to know?</p>
          </div>

          <div className="conversation__body--right-time">
            <p>12:57 am</p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" rx="10" fill="#FFEAD1" />
              <path
                d="M14 7L8.5 12.5L6 10"
                stroke="#1C1D22"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="conversation__body--date">
          <p>Today</p>
        </div>

        <div className="conversation__body--left-message">
          <div>
            <p>
              I want to know if the price is negotiable, I need about 2 Units
            </p>
          </div>

          <p className="conversation__body--left-message-time">12:55 am</p>
        </div>

        <div className="conversation__body--new-msg">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="conversation__body--new-msg-file"
          >
            <rect width="32" height="32" rx="8" fill="#FFF2E2" />
            <path
              d="M16 9V23"
              stroke="#1C1D22"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 16H23"
              stroke="#1C1D22"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input type="text" placeholder="Your message" />

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="conversation__body--new-msg-emoji"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#5570F1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
              stroke="#5570F1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 9H15.01"
              stroke="#5570F1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 9H9.01"
              stroke="#5570F1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="conversation__body--new-msg-send">
            <p>Send</p>

            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8563 1.14857C16.4396 0.722739 15.8229 0.565239 15.2479 0.731905L1.8396 4.60607C1.23293 4.77441 0.802932 5.25524 0.687098 5.86524C0.568765 6.48691 0.982098 7.27691 1.5221 7.60691L5.7146 10.1669C6.1446 10.4302 6.6996 10.3644 7.05543 10.0077L11.8563 5.20691C12.0979 4.95607 12.4979 4.95607 12.7396 5.20691C12.9813 5.44774 12.9813 5.84024 12.7396 6.09024L7.93043 10.8911C7.57377 11.2477 7.5071 11.8011 7.7696 12.2319L10.3313 16.4402C10.6313 16.9394 11.1479 17.2236 11.7146 17.2236C11.7813 17.2236 11.8563 17.2236 11.9229 17.2144C12.5729 17.1319 13.0896 16.6894 13.2813 16.0644L17.2563 2.75691C17.4313 2.19024 17.2729 1.57357 16.8563 1.14857Z"
                fill="#1C1D22"
              />
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.50882 13.0065C1.34882 13.0065 1.18882 12.9457 1.06716 12.8232C0.822992 12.579 0.822992 12.184 1.06716 11.9398L2.20466 10.8015C2.44883 10.5582 2.84466 10.5582 3.08883 10.8015C3.33216 11.0457 3.33216 11.4415 3.08883 11.6857L1.95049 12.8232C1.82882 12.9457 1.66882 13.0065 1.50882 13.0065ZM4.64316 14.0002C4.48316 14.0002 4.32316 13.9393 4.20149 13.8168C3.95733 13.5727 3.95733 13.1777 4.20149 12.9335L5.33899 11.7952C5.58316 11.5518 5.97899 11.5518 6.22316 11.7952C6.46649 12.0393 6.46649 12.4352 6.22316 12.6793L5.08483 13.8168C4.96316 13.9393 4.80316 14.0002 4.64316 14.0002ZM4.85458 16.9735C4.97624 17.096 5.13624 17.1568 5.29624 17.1568C5.45624 17.1568 5.61624 17.096 5.73791 16.9735L6.87624 15.836C7.11958 15.5918 7.11958 15.196 6.87624 14.9518C6.63207 14.7085 6.23624 14.7085 5.99207 14.9518L4.85458 16.0902C4.61041 16.3343 4.61041 16.7293 4.85458 16.9735Z"
                fill="#1C1D22"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
