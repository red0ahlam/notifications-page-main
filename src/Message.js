import NotifLayout from "./NotifLayout";

function Message(props) {
  return (
    <NotifLayout image={props.image} read={props.read} seen={props.seen}>
      <div className="margin-right-flow">
        <span className="name">{props.name}</span>
        <span className="action">sent you a private message</span>
        {(() => {
          if (props.read === false) {
            return <span className="unread-indicator"></span>;
          }
        })()}
      </div>
      <div className="time">{props.timeRecieved}</div>
      <div className="message">{props.message}</div>
    </NotifLayout>
  );
}

export default Message;