using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{

    // used for getting the current id, so we can get the current portfolio
    protected int load_current_userid()
    {
        return 1234;
    }

    // Get the current userID and use that to locate the users portfolio (portfolioid)
    // return null if current portfolio doesn't exist
    protected int load_current_idportfolio()
    {
        int userID = load_current_userid();
        // query here to get what you return

        return 0;
        // return null if no portfolio for current id (person has never bought stocks)
    }

    // if the user doesn't already have a idportfolio, then make one (done here).
    protected void make_new_portfolio()
    {
        MySqlConnection mySql = new MySqlConnection();
        mySql.CreateConn();
        mySql.Command = mySql.Connection.CreateCommand();

        int userID = load_current_userid();

        String sqlInsert = "insert into portfolio (userid) values ('" + userID + "');";
        Response.Write(sqlInsert);

        mySql.Command.CommandText = sqlInsert;
        mySql.Command.ExecuteNonQuery();
        mySql.Command.Dispose();
        mySql.Connection.Close();
        mySql.CloseConn();
    }

    // increase the shares for a particular portfolio and  
    protected void upshares(String symbol, int idport)
    {
        // if the stock table has the portfolio id already for the specific symbol, then just up the shares the user owns
        // if not, then add it to the stocks table

        MySqlConnection mySql = new MySqlConnection();
        mySql.CreateConn();
        mySql.Command = mySql.Connection.CreateCommand();

        String sqlSearch = "SELECT idportfolio,ticker FROM stock WHERE idportfolio='"+idport+"' AND ticker='"+symbol+"';";
        Response.Write(sqlSearch);

        mySql.Command.CommandText = sqlSearch;
        GridView1.DataSource = mySql.Command.ExecuteReader();

        GridView1.DataBind();
        mySql.Connection.Close();
    }

    // if stock already a part of portfolio, then increase the shares
    // if stock is fresh, add it to the stocks table
    // ...for both cases, add stocktransition row
    protected void buy_stock(object sender, EventArgs e)
    {
        // get symbol
        String symbol = stockInput.Text;

        // load current portfolio id
        int idport = load_current_idportfolio();
        // if no current, then make a new portfolio and get THAT id
        if (idport == null)
        {
            make_new_portfolio();
            idport = load_current_idportfolio();
        }

        // Up the shares for this portfolio, for this symbol!!!
        upshares(symbol, idport);

        // in both cases, add the transaction
        MySqlConnection mySql = new MySqlConnection();
        mySql.CreateConn();
        mySql.Command = mySql.Connection.CreateCommand();
        String sqlInsert = "insert into ... (name, starttime, endtime, date, description) values ('" + name.Text + "','" + starttime.Text + "','" + endtime.Text + "','" + date.Text + "','" + description.Text + "');";
        Response.Write(sqlInsert);

        mySql.Command.CommandText = sqlInsert;
        mySql.Command.ExecuteNonQuery();
        mySql.Command.Dispose();
        mySql.Connection.Close();
        mySql.CloseConn();
    }
}