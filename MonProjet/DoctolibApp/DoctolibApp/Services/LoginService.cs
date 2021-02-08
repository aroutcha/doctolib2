using DoctolibApp.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace DoctolibApp.Services
{
    public class LoginService : ILogin
    {

        private IHttpContextAccessor _accessor;
        public LoginService(IHttpContextAccessor accessor)
        {
            _accessor = accessor;
        }


        public async Task<bool> Login(Utilisateur utilisateur)
        {
            Utilisateur us = DataDbContext.Instance.Utilisateurs.FirstOrDefault(u => u.Email == utilisateur.Email && u.MotPasse == utilisateur.MotPasse);
            if (us != null)
            {
                List<Claim> claims = new List<Claim>() {
                new Claim(ClaimTypes.Email, us.Email),
                new Claim(ClaimTypes.Role, us.Role)
                };

                ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                await _accessor.HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity));
                return true;
            }
            return false;
        }


        public bool IsLogged()
        {
            string logged = _accessor.HttpContext.Session.GetString("login");
            return logged == "ok";
        }

        public async Task<bool> LogOut()
        {
            await _accessor.HttpContext.SignOutAsync();
            return true;
        }


        public string GetEmail()
        {
            Claim emailClaim = _accessor.HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email);
            if (emailClaim != null)
                return emailClaim.Value;
            return null;
        }

    }
}
