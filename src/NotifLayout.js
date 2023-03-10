

function NotifLayout(props) {
    return (
      <a href="#" className={props.read === false ? "notification d-grid-layout unread-bg": "notification d-grid-layout"} onClick={props.seen}>
        <div className = "notif-img">
          <img src={props.image} alt=""/>
        </div>
        <div>
          {props.children}
        </div>
      </a>
    );
  }
  
  export default NotifLayout;