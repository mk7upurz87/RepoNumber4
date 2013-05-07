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
        String id = "1234";
        String sqlInsert = "insert into Calendar (name, starttime, endtime, date, description, [user]) values ('" + 
            name.Text + "','" + starttime.Text + "','" + endtime.Text + "','" + date.Text + "','" + description.Text +
            "','" + id + "');";
        Response.Write(sqlInsert);

        mySql.Command.CommandText = sqlInsert;
        mySql.Command.ExecuteNonQuery();
        mySql.Command.Dispose();
        mySql.Connection.Close();
        mySql.CloseConn();
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        Response.Redirect("~/Default.cshtml");
        }
}