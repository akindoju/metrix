import { FC, useState, useEffect } from "react";
import "./Conversations.scss";
import { conversations } from "../../data/data";
import { Conversation } from "../../components/Conversation/Conversation";

export const Conversations: FC = () => {
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(true);
  const [user, setUser] = useState<{
    image: string;
    name: string;
    new: boolean;
    active: boolean;
  }>({ image: "", name: "Jane Doe", new: false, active: false });

  useEffect(() => {
    if (isMessageOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isMessageOpen]);

  return (
    <>
      <div className="conversations">
        <div className="conversations__new">
          <p>Conversations with Customers</p>

          <button>New Message</button>
        </div>

        <div className="conversations__messages">
          <div className="conversations__messages--heading">
            <p className="conversations__messages--heading-contact">Contacts</p>
            <p className="conversations__messages--heading-count">12</p>
          </div>

          <div className="conversations__messages--search">
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

          {conversations.map((conversation, idx) => {
            return (
              <div
                key={conversation.name + idx}
                className="conversations__messages--message"
                onClick={() => {
                  setUser({
                    name: conversation.name,
                    active: conversation.active,
                    image: conversation.image,
                    new: conversation.new,
                  });
                  setIsMessageOpen(true);
                }}
              >
                <div className="conversations__messages--message-image">
                  <img src={conversation.image} alt="User Image" />
                  <div
                    className={
                      conversation.active ? "user-active" : "user-inactive"
                    }
                  />
                </div>

                <div className="conversations__messages--message-text">
                  <div className="conversations__messages--message-text-top">
                    <p className="conversations__messages--message-text-top-name">
                      {conversation.name}
                    </p>

                    {conversation.new ? (
                      <div className={conversation.new ? "new-msg" : ""}>
                        <p>New</p>
                      </div>
                    ) : conversation.unread ? (
                      <div className={conversation.unread ? "unread-msg" : ""}>
                        <p>2</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="conversations__messages--message-text-bottom">
                    <p className="conversations__messages--message-text-bottom-msg">
                      Hi, i want to make enquiries about yo...
                    </p>

                    <p className="conversations__messages--message-text-bottom-time">
                      12:55 am
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {isMessageOpen && (
        <Conversation
          user={user}
          isMessageOpen={isMessageOpen}
          setIsMessageOpen={setIsMessageOpen}
        />
      )}
    </>
  );
};
