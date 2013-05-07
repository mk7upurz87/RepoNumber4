using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using System.Web;
using System.Data.SqlClient;

/// <summary>
/// Calendar connects with the sql! we need to figure out how to make it user specific
/// </summary>
public class Calendar
{
    List<string> names;
    List<string> days;
    List<string> starts;
    List<string> ends;
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
        starts = new List<string>();
        ends = new List<string>();
        j = 0;

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
            int id = 1234;
            SqlCommand myCommand = new SqlCommand("select * from Calendar where [user]= " + id + "", myConnection);
            myReader = myCommand.ExecuteReader();
            while (myReader.Read())
            {
                names.Add(myReader["name"].ToString());
                days.Add(myReader["date"].ToString());
                starts.Add(myReader["starttime"].ToString());
                ends.Add(myReader["endtime"].ToString());
               // System.Diagnostics.Debug.Write("###$");
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.ToString());
        }
    }

    public string getNames()
    {
        String nameString = "";
        for (int i = 0; i < names.Count(); i++)
        {
            nameString += names.ElementAt(i) + "*";
        }
        return nameString;
    }

    public string getDates()
    {
        String dateString = "";
        for (int i = 0; i < days.Count(); i++)
        {
            dateString += days.ElementAt(i) + "*";
        }
        return dateString;
    }

    public string getStarts()
    {
        String startString = "";
        for (int i = 0; i < starts.Count(); i++)
        {
            startString += starts.ElementAt(i) + "*";
        }
        return startString;
    }

    public string getEnds()
    {
        String endString = "";
        for (int i = 0; i < ends.Count(); i++)
        {
            endString += ends.ElementAt(i) + "*";
        }
        return endString;
    }

    public int getNumOfEntries()
    {
        return days.Count();
    }
}