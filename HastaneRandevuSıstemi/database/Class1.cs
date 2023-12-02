using Microsoft.Analytics.Interfaces;
using Microsoft.Analytics.Interfaces.Streaming;
using Microsoft.Analytics.Types.Sql;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Data.SqlClient;

namespace database
{
    public class Class1
    {
        public SqlConnection baglanti()
        {


            SqlConnection baglan = new SqlConnection(@"Data Source=LAPTOP-DHCKMH9F\SQLEXPRESS;Initial Catalog=Dbo_Hastane;Integrated Security=True");
            baglan.Open();
            return baglan;
        }
    }
}