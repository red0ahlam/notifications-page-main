import NotifLayout from "./NotifLayout";

function Follow(props) {
  return (
    <NotifLayout image={props.image} read={props.read} seen={props.seen}>
      <div className="margin-right-flow">
        <span className="name">{props.name}</span>
        <span className="action">followed you</span>
        {(() => {
          if (props.read === false) {
            return <span className="unread-indicator"></span>;
          }
        })()}
      </div>
      <div className="time">{props.timeRecieved}</div>
    </NotifLayout>
  );
}

export default Follow;