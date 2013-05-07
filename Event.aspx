<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Event.aspx.cs" Inherits="_Default" %>

<head id="Head1" runat="server">
    <title>Event</title>
    <link href="Content/Site.css" rel="stylesheet" />
</head>
<body>
    <p class="site-title"><a href="About.cshtml">Web Engineering</a></p>



    <h1>Add an Event</h1>
    <form id="form1" runat="server">
        <div>    
            Event Name:  <asp:TextBox ID="name" runat="server"></asp:TextBox>
            &nbsp; DO NOT USE QUOTES OF ANY KIND<br />
            Start Time:  <asp:TextBox ID="starttime" runat="server"></asp:TextBox>
            &nbsp; (Must be formatted HH:MM)<br />
            End Time:  <asp:TextBox ID="endtime" runat="server"></asp:TextBox>
            &nbsp; (Must be formatted HH:MM)<br />
            Date:  <asp:TextBox ID="date" runat="server"></asp:TextBox>
            &nbsp;(Must be formatted MM/DD/YYYY)<br />
            Description:  <asp:TextBox ID="description" runat="server"></asp:TextBox>

            <asp:Button ID="Add" runat="server" onclick="Add_Click" Text="Add Event" />
 
            <br />
            <br />
        </div>

        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Return to Home" />

    </form>
</body>