using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Calendar
/// </summary>
public class Calendar
{
    List<string> events;
	public Calendar()
	{
        events = new List<string>();
        string hey = "hey";
        events.Add(hey + "1");
        events.Add(hey + "2");
        events.Add(hey + "3");
	}

    public string getNames(int i)
    {
        return events.GetRange(i-1,i).ToString();
    }
    
}