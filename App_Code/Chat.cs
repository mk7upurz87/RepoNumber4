using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Chat
/// </summary>
public class Chat
{

    private static Chat chatInstance;
    private List<String> messages;


    private Chat()
    {
        messages = new List<String>();
        messages.Add("Welcome to chat!");
    }

    public static Chat getInstance()
    {
        if (chatInstance == null)
            chatInstance = new Chat();
        return chatInstance;
    }

    public List<String> getMessages()
    {
        return messages;
    }

    public void sendMessage(String sender, String message)
    {
        messages.Add(sender + " : " + message);
    }

 
}