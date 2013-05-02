using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class _Default : System.Web.UI.Page
{


    private string mySqlConnectionString = "server=SHANNON-CHARLES;database=WebEngineering;User ID=webuser;Password=webuser;Trusted_Connection=True;";
    protected void Page_Load(object sender, EventArgs e)
    {
    }




    // Insert more complicated Input
    protected void Add_Click(object sender, EventArgs e)
    {
        MySqlConnection mySql = new MySqlConnection();
        mySql.CreateConn();
        mySql.Command = mySql.Connection.CreateCommand();

        String sqlInsert = "insert into Calendar (name, starttime, endtime, date, description) values ('" + name.Text + "','" + starttime.Text + "','" + endtime.Text + "','" + date.Text + "','" + description.Text + "');";
        Response.Write(sqlInsert);

        mySql.Command.CommandText = sqlInsert;
        mySql.Command.ExecuteNonQuery();
        mySql.Command.Dispose();
        mySql.Connection.Close();
        mySql.CloseConn();
    }


    // Show all results
    protected void ShowAll_Click(object sender, EventArgs e)
    {
        MySqlConnection mySql = new MySqlConnection();
        mySql.CreateConn();
        mySql.Command = mySql.Connection.CreateCommand();

        String sqlSearch = "select * from Calendar order by id;";
        Response.Write(sqlSearch);

        mySql.Command.CommandText = sqlSearch;
        string hey = mySql.Command.ExecuteReader().ToString();
        mySql.Connection.Close();

        Console.WriteLine(hey);


    }





    // Get user input
    protected void ShowName_Click(object sender, EventArgs e)
    {

        MySqlConnection mySql = new MySqlConnection();
        mySql.CreateConn();
        mySql.Command = mySql.Connection.CreateCommand();

        String sqlSearch = "select * from Calendar where name= " + txtEventName.Text + ";";
        Response.Write(sqlSearch);

        mySql.Command.CommandText = sqlSearch;
        GridView1.DataSource = mySql.Command.ExecuteReader();
        GridView1.DataBind();
        mySql.Connection.Close();

    }


   
    protected void Button6_Click(object sender, EventArgs e)
    {

        MySqlConnection mySql = new MySqlConnection();
        mySql.CreateConn();
        mySql.Command = mySql.Connection.CreateCommand();

        String sqlUpdate = "update Calendar set starttime='" + starttime.Text + "',endtime=" + endtime.Text + "',date=" + date.Text + " where name='" + name.Text + "';";
        Response.Write(sqlUpdate);

        mySql.Command.CommandText = sqlUpdate;
        mySql.Command.ExecuteNonQuery();
        mySql.Command.Dispose();
        mySql.Connection.Close();
        mySql.CloseConn();
    }
}