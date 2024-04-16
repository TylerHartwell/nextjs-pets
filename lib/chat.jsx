import { useState } from "react"

export default function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  function openChatClick() {
    setIsChatOpen(true)
    setUnreadCount(0)
  }
  function closeChatClick() {
    setIsChatOpen(false)
  }

  return (
    <>
      <div className="open-chat" onClick={openChatClick}>
        {unreadCount > 0 && <span className="chat-unread-badge">{unreadCount}</span>}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-chat-text-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
        </svg>
      </div>
      <div className={`chat-container ${isChatOpen ? "chat-container--visible" : ""}`}>
        <div className="chat-title-bar">
          <h4>Staff Team Chat</h4>
          <svg
            onClick={closeChatClick}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
          </svg>
        </div>
        <div className="chat-log">
          <div className="chat-message">
            <div className="chat-message-inner">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti beatae laudantium voluptas dolorum ad at dolor,
              minus dolorem nam. Sunt quam praesentium, beatae expedita deleniti rerum totam quas unde inventore.
            </div>
          </div>
          <div className="chat-message">
            <div className="chat-message-inner">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur ducimus placeat velit nobis id enim tenetur
              facere nihil perferendis alias rem eius distinctio, perspiciatis maxime illo laudantium numquam excepturi!
            </div>
          </div>
          <div className="chat-message chat-message--self">
            <div className="chat-message-inner">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At dolorum repudiandae soluta non, error sapiente culpa
              eaque quaerat recusandae illo sint voluptas tempora perspiciatis totam officiis necessitatibus numquam laborum
              incidunt?
            </div>
          </div>
        </div>
        <form>
          <input type="text" autoComplete="off" placeholder="Your message here" />
        </form>
      </div>
    </>
  )
}
