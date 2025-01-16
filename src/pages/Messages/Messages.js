import React, { useState, useEffect } from 'react';
import messagesData from '../../dummy.json'; 

function Messages({ searchTerm }) {
  const [filteredMessages, setFilteredMessages] = useState([]);

  useEffect(() => {
    const results = messagesData.flatMap(user =>
      user.messages.filter(message =>
        (message.from && message.from.toLowerCase().includes(searchTerm?.toLowerCase() || "")) ||
        (message.content && message.content.toLowerCase().includes(searchTerm?.toLowerCase() || "")) ||
        (message.date && message.date.includes(searchTerm || "")) ||
        (message.time && message.time.includes(searchTerm || "")) ||
        (user.userId && user.userId.includes(searchTerm || ""))
      )
    );
    setFilteredMessages(results);
  }, [searchTerm]);

  return (
    <div className="mx-4 my-6 p-6 border border-gray-300 rounded-lg bg-white flex flex-col">
      <h1>Messages Page</h1>
      <div>
        {filteredMessages.length > 0 ? (
          filteredMessages.map((message) => (
            <div key={message.messageId} className="border-b border-gray-300 py-2">
              <div className="font-bold">{message.from}</div>
              <div>{message.content}</div>
              <div className="text-sm text-gray-500">
                {message.date} {message.time}
              </div>
            </div>
          ))
        ) : (
          <div>No messages found</div>
        )}
      </div>
    </div>
  );
}

export default Messages;
