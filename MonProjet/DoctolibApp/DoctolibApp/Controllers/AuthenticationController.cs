using DoctolibApp.Models;
using DoctolibApp.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctolibApp.Controllers
{
    public class AuthenticationController : Controller
    {

        public ILogin _login;

        public AuthenticationController(ILogin login)
        {
            _login = login;
        }

        public IActionResult Login(string message)
        {
            ViewBag.Message = message;
            return View();
        }

        public async Task<IActionResult> SubmitLogin(Utilisateur utilisateur)
        {
            if (await _login.Login(utilisateur))
            {
                return RedirectToAction("FormPraticien", "Praticien");
            }
            else
            {
                return RedirectToAction("Login", "Authentication");
            }

        }

        public async Task<IActionResult> LogOut()
        {
            await _login.LogOut();
            return RedirectToAction("Index", "Praticien");
        }
       
    }
}
