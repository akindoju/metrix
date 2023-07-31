import { FC, useState, useEffect } from "react";
import "./Conversations.scss";
import { conversations } from "../../data/data";
import { Conversation } from "../../components/Conversation/Conversation";
import { useSelector } from "react-redux";

export const Conversations: FC = () => {
  const [active, setActive] = useState<string>("Jane Doe0");
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);
  const [user, setUser] = useState<{
    image: string;
    name: string;
    new: boolean;
    active: boolean;
  }>({ image: "", name: "Jane Doe", new: false, active: false });

  const width = useSelector(
    (state: { general: { width: number } }) => state.general.width
  );

  const isSidebarMinimized = useSelector(
    (state: { general: { isSidebarMinimized: boolean } }) =>
      state.general.isSidebarMinimized
  );

  useEffect(() => {
    if (isMessageOpen && width < 1200) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isMessageOpen, width]);

  return (
    <div
      className={
        isSidebarMinimized
          ? "coversations-minimized conversations"
          : "conversations"
      }
    >
      <div className="conversations__new">
        <p>Conversations with Customers</p>

        <button>New Message</button>
      </div>

      <div className="main-container">
        <div className="conversations__main">
          <div className="conversations__main--messages">
            <div className="conversations__main--messages-heading">
              <p className="conversations__main--messages-heading-contact">
                Contacts
              </p>
              <p className="conversations__main--messages-heading-count">12</p>
            </div>

            <div className="conversations__main--messages-search">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="9.80547"
                  cy="10.3055"
                  r="7.49047"
                  stroke="#130F26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0153 15.9043L17.9519 18.8333"
                  stroke="#130F26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input type="text" placeholder="Search" />
            </div>

            <div className="chat-overflow">
              {conversations.map((conversation, idx) => {
                return (
                  <div
                    key={conversation.name + idx}
                    className={
                      active === conversation.name + idx
                        ? "msg-active conversations__main--messages-message"
                        : "conversations__main--messages-message"
                    }
                    onClick={() => {
                      setUser({
                        name: conversation.name,
                        active: conversation.active,
                        image: conversation.image,
                        new: conversation.new,
                      });
                      setActive(conversation.name + idx);
                      setIsMessageOpen(true);
                    }}
                  >
                    <div className="conversations__main--messages-message-image">
                      <img src={conversation.image} alt="User Image" />
                      <div
                        className={
                          conversation.active ? "user-active" : "user-inactive"
                        }
                      />
                    </div>

                    <div className="conversations__main--messages-message-text">
                      <div className="conversations__main--messages-message-text-top">
                        <p className="conversations__main--messages-message-text-top-name">
                          {conversation.name}
                        </p>

                        {conversation.new ? (
                          <div className={conversation.new ? "new-msg" : ""}>
                            <p>New</p>
                          </div>
                        ) : conversation.unread ? (
                          <div
                            className={conversation.unread ? "unread-msg" : ""}
                          >
                            <p>2</p>
                          </div>
                        ) : null}
                      </div>

                      <div className="conversations__main--messages-message-text-bottom">
                        <p className="conversations__main--messages-message-text-bottom-msg">
                          Hi, i want to make enquiries about yo...
                        </p>

                        <p className="conversations__main--messages-message-text-bottom-time">
                          12:55 am
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {(isMessageOpen || width >= 1200) && (
            <Conversation
              user={user}
              isMessageOpen={isMessageOpen}
              setIsMessageOpen={setIsMessageOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
};
