using ApiDoctolib.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiDoctolib.Services
{
    public interface ILogin
    {
        string Login(Utilisateur utilisateur);


    }
}
