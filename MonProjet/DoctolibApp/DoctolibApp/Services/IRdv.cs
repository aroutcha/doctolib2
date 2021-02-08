using DoctolibApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctolibApp.Services
{
    public interface IRdv
    {
        bool AddRdv(int id);
        bool RemoveFromRdv(int id);
        List<Praticien> GetRdv();
        bool IsRdv(int id);
    }
}
