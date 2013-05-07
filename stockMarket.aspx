<%@ Page Language="C#" AutoEventWireup="true" CodeFile="stockMarket.aspx.cs" Inherits="_Default" %>

<head id="Head1" runat="server">
    <title>Stock Market</title>

    <link href="Content/Site.css" rel="stylesheet" />
    <link href="~/Content/themes/base/jquery.ui.all.css" rel="stylesheet" type="text/css" />
   	<link href="~/Content/themes/base/jquery-ui.css" rel="stylesheet"/>
    <link href="~/Content/Site.css" rel="stylesheet" type="text/css" />
    <link href="~/Content/css/bootstrap.css" rel="stylesheet" type="text/css" />

    <script src="Scripts/jquery-1.9.1.min.js"></script>
    <script src="Scripts/jquery-ui-1.10.2.custom.min.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-1.10.2.js"></script>
  	<script src="Scripts/bootstrap.min.js" type="text/javascript"></script>
    <script src="Scripts/dataPlot.js" type="text/javascript"></script>
	<script src="Scripts/QuoteService.js" type="text/javascript"></script>
    <script src="Scripts/highcharts.js"></script>
    <script src="Scripts/stocks.js" type="text/javascript"></script>

</head>
<body>
    <p class="site-title"><a href="About.cshtml">Web Engineering</a></p>

    <h1>Buy Stocks</h1>
    <form class="inputs" id="stockForm" runat="server">
        <div>    
            Stock Symbol:  <asp:TextBox ID="stockInput" runat="server"></asp:TextBox>
            <asp:Button ID="query" type="submit" runat="server" Text="Query" />
            <br />

            Quantity:   <asp:TextBox ID="quantity" runat="server"></asp:TextBox>
            <br />

            <asp:Button ID="buy" runat="server" onclick="buy_stock" Text="Buy Stock" />
 
            <br />
        </div>
    </form>
    
    <div id="stocksContainer"></div>
    
    <h1>Sell Stocks</h1>
        <div>    
            <asp:GridView ID="GridView1" runat="server"></asp:GridView>
        </div>  
</body>