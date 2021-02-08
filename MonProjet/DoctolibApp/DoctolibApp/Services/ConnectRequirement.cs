using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctolibApp.Services
{
    public class ConnectRequirement : IAuthorizationRequirement
    {
        public string Role { get; set; }

        public ConnectRequirement()
        {

        }

        public ConnectRequirement(string r)
        {
            Role = r;
        }
    }
}
