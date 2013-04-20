<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Event.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
      Event Name:  <asp:TextBox ID="name" runat="server"></asp:TextBox>
        <br />
      Start Time:  <asp:TextBox ID="starttime" runat="server"></asp:TextBox>
      <br />
      End Time:  <asp:TextBox ID="endtime" runat="server"></asp:TextBox>
      <br />
      Date:  <asp:TextBox ID="date" runat="server"></asp:TextBox>
        <br />
      Description:  <asp:TextBox ID="description" runat="server"></asp:TextBox>

    <asp:Button ID="Add" runat="server" onclick="Add_Click" Text="Add Event" />
    <asp:Button ID="ShowAll" runat="server" onclick="ShowAll_Click" Text="Show All Results" />
 
      <br /><br />
        <asp:Button ID="ShowName" runat="server" onclick="ShowName_Click" 
            Text="Search Events" />
        <asp:TextBox ID="txtEventName" runat="server"></asp:TextBox>
    </div>
      <asp:GridView ID="GridView1" runat="server">
    </asp:GridView>
    <asp:TextBox ID="txtSanitize" runat="server"></asp:TextBox>
        <asp:Button ID="Button6" runat="server" OnClick="Button6_Click" Text="UpdateMe!" />
    </form>
</body>
</html>
