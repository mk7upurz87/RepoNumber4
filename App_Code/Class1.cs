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
}