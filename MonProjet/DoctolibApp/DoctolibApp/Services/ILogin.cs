using DoctolibApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctolibApp.Services
{
    public interface ILogin
    {
        Task<bool> Login(Utilisateur utilisateur);
        bool IsLogged();

        Task<bool> LogOut();
        string GetEmail();
    }
}
