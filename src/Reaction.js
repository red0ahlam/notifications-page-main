import NotifLayout from "./NotifLayout";


function Reaction(props) {

  return (
    <NotifLayout image={props.image} read={props.read} seen={props.seen}>
      <div className="margin-right-flow">
        <span className="name">{props.name}</span>
        <span className="action">reacted to your recent post</span>
        <span className="acted-on post">{props.post}</span>
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

export default Reaction;