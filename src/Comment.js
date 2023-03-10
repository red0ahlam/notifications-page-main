import NotifLayout from "./NotifLayout";

function Comment(props) {
  return (
    <NotifLayout image={props.image} read={props.read} seen={props.seen}>
      <div className="d-flex">
        <div>
          <div className="margin-right-flow">
            <span className="name">{props.name}</span>
            <span className="action">commented on your picture</span>
            {(()=> {
              if(props.read === false){
                return <span className="unread-indicator"></span>;
              }
            })()}
          </div>
          <div className="time">{props.timeRecieved}</div>
        </div>
        <div className="acted-on acted-on-post">
          <img src={props.postPic} alt="" />
        </div>
      </div>
    </NotifLayout>
  );
}

export default Comment;