using DoctolibApp.Models;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctolibApp.Services
{
    public class RdvSessionService : IRdv
    {
        private HttpContext _httpContext;
        public RdvSessionService(IHttpContextAccessor httpContext)
        {
            _httpContext = httpContext.HttpContext;
        }



        public bool AddRdv(int id)
        {
            Praticien p = Praticien.GetPraticien(id);
            if (p != null)
            {
                List<Praticien> praticiens = GetRdv();
                praticiens.Add(p);
                _httpContext.Session.SetString("praticiens", JsonConvert.SerializeObject(praticiens));
                return true;
            }
            return false;
        }



        public bool RemoveFromRdv(int id)
        {
            List<Praticien> praticiens = GetRdv();
            Praticien praticien = praticiens.Find(p => p.Id == id);
            if (praticien != null)
            {
                praticiens.Remove(praticien);
                _httpContext.Session.SetString("praticiens", JsonConvert.SerializeObject(praticiens));
            }
            return false;
        }




        public List<Praticien> GetRdv()
        {
            string praticiensString = _httpContext.Session.GetString("praticiens");
            List<Praticien> praticiens = (praticiensString != null)
                ? JsonConvert.DeserializeObject<List<Praticien>>(praticiensString)
                : new List<Praticien>();
            return praticiens;
        }



        public bool IsRdv(int id)
        {
            List<Praticien> praticiens = GetRdv();
            return praticiens.Find(p => p.Id == id) != null;
        }


    }
}
