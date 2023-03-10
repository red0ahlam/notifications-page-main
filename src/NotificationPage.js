import Comment from "./Comment";
import Follow from "./Follow";
import Joined from "./Joined";
import Left from "./Left";
import Message from "./Message";
import Reaction from "./Reaction";

import { useState, useEffect } from "react";

function NotificationPage() {
  const fileName = "./notifications.json"
  const [unread, setunread] = useState(0);
  const [data, setData] = useState(null);

  async function getjson(file) {
    let res = await fetch(file);
    res = await res.json();
    setData(res);
  }

  useEffect(() => {
    getjson(fileName);
  }, [])

  useEffect(() => {
    setunread(0)
    if (data) {
      data.forEach(element => {
        if (element.read === false) {
          setunread(prev => prev + 1);
        }
      });
    }
  }, [data])

  function allRead() {
    let newData = [];
    if (data) {
      data.forEach((element, index) => {
        newData.push(element)
        if (element.read === false) {
          newData[index].read = true;
        }
      });

    } else {
      newData = [...data]
    }
    setData(newData)
  }

  function seen(event) {
    let notifications = document.getElementsByClassName('notification');
    let currentIndex;
    let newData = [];

    for (let i = 0; i < notifications.length; i++) {
      if (notifications[i] === event.currentTarget) {
        currentIndex = i + 1;
      }
    }
    if (data && event.currentTarget.classList.contains('notification')) {
      data.forEach((element, index) => {
        newData.push(element)
        if (index + 1 === currentIndex) {
          if (element.read === false) {
            newData[index].read = true;
          }
        }
      });
      
    } else {
      newData = [...data]
    }
    setData(newData)
  }


  function switcher(element) {
    switch (element.notificationType) {
      case "reaction":
        return <Reaction key={element.id} name={element.name} post={element.post} timeRecieved={element.timeRecieved} image={element.image} read={element.read} seen={seen} />;
      case "leftGroup":
        return <Left key={element.id} name={element.name} group={element.group} timeRecieved={element.timeRecieved} image={element.image} read={element.read} seen={seen} />;
      case "message":
        return <Message key={element.id} name={element.name} message={element.message} timeRecieved={element.timeRecieved} image={element.image} read={element.read} seen={seen} />;
      case "comment":
        return <Comment key={element.id} name={element.name} postPic={element.postPic} timeRecieved={element.timeRecieved} image={element.image} read={element.read} seen={seen} />;
      case "joinedGroup":
        return <Joined key={element.id} name={element.name} group={element.group} timeRecieved={element.timeRecieved} image={element.image} read={element.read} seen={seen} />;
      case "follow":
        return <Follow key={element.id} name={element.name} timeRecieved={element.timeRecieved} image={element.image} read={element.read} seen={seen} />;
      default:
        return null;
    }
  }

  return (
    <main>
      <div className="container notif-page">
        <div className="notif-bar">
          <div className="unread-notif">
            <h1>Notifications</h1>
            <div>
              <span className="visually-hidden">amount of unread notifications: </span>
              <span className="unread-number">{unread}</span>
            </div>
          </div>
          <button onClick={allRead}>Mark all as read</button>
        </div>
        <div className="notifications">
          {data && data.map(element => switcher(element))}
        </div>
      </div>
    </main>
  );
}

export default NotificationPage;