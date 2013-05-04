using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;

/// <summary>
/// Summary description for Calendar
/// </summary>
public class Calendar
{
    List<string> events;
    
    SqlConnection myConnection = new SqlConnection("user id=webuser;" +
                                       "password=webuser;server=SHANNON-CHARLES;" +
                                       "Trusted_Connection=True;" +
                                       "database=WebEngineering; " +
                                       "connection timeout=30");
	public Calendar()
	{
        events = new List<string>();
	}

    public string database()
    {
        try
        { myConnection.Open(); }
        catch (Exception e)
        { Console.WriteLine(e.ToString()); }

        try
        {
            SqlDataReader myReader = null;
            SqlCommand myCommand = new SqlCommand("select * from calendar",
                                                     myConnection);
            myReader = myCommand.ExecuteReader();
            while (myReader.Read())
            {

                return myReader["name"].ToString();
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.ToString());
        }
        return "whoops!";
    }

    public List<string> getNames()
    {
        System.Diagnostics.Debug.Write(events.ToString());
        return events;
    }



}