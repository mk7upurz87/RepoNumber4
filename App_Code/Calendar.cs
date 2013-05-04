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
    int i;
    
    SqlConnection myConnection = new SqlConnection("user id=webuser;" +
                                       "password=webuser;server=SHANNON-CHARLES;" +
                                       "Trusted_Connection=True;" +
                                       "database=WebEngineering; " +
                                       "connection timeout=30");
	public Calendar()
	{
        events = new List<string>();
        i = -1;
	}

    public void database()
    {
        try
        { myConnection.Open(); }
        catch (Exception e)
        { Console.WriteLine(e.ToString()); }

        try
        {
            SqlDataReader myReader = null;
            SqlCommand myCommand = new SqlCommand("select * from Calendar",
                                                     myConnection);
            myReader = myCommand.ExecuteReader();
            while (myReader.Read())
            {
                events.Add(myReader["name"].ToString());
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.ToString());
        }
    }

    public string getName()
    {
        i = i + 1;
        string name = events.ElementAt(i).ToString();
        return name;
    }



}