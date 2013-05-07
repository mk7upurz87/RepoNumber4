using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Net;

/// <summary>
/// Calendar connects with the sql! we need to figure out how to make it user specific
/// </summary>
public class Calendar
{
    List<string> names;
    List<string> days;
    int i;
    int j;
    string email;
    
    SqlConnection myConnection = new SqlConnection("user id=webuser;" +
                                       "password=webuser;server=SHANNON-CHARLES;" +
                                       "Trusted_Connection=True;" +
                                       "database=WebEngineering; " +
                                       "connection timeout=30");
	public Calendar()
	{
        names = new List<string>();
        days = new List<string>();
        i = -1;
        j = -1;
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
                names.Add(myReader["name"].ToString());
                days.Add(myReader["date"].ToString());
                System.Diagnostics.Debug.Write("###################$");
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
        string name = names.ElementAt(i).ToString();
        return name;
    }

    public string getDate()
    {
        j = j + 1;
        string day = days.ElementAt(j).ToString();
        System.Diagnostics.Debug.Write("****************************************");
        System.Diagnostics.Debug.Write(day);
        System.Diagnostics.Debug.Write("****************************************");
        return day;
    }
}