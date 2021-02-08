using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using ApiDoctolib.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace ApiDoctolib.Services
{
    public class LoginService : ILogin
    {
        private DataDbContext _data;
        private IConfiguration _config;
        public LoginService(DataDbContext data, IConfiguration config)
        {
            _data = data;
            _config = config;
        }
        public string Login(Utilisateur utilisateur)
        {
            Utilisateur u = _data.Utilisateurs.FirstOrDefault(x => x.Email == utilisateur.Email && x.MotPasse == utilisateur.MotPasse);
            
            if(u != null)
            {
                return GenerateToken(u.Email, u.Role);
            }
            return null;
        }



        private string GenerateToken(string email, string role)
        {
            SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetValue<string>("jwt:key")));
            SigningCredentials credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            List<Claim> claims = new List<Claim>()
            {
                new Claim(ClaimTypes.Email, email),
                new Claim(ClaimTypes.Role, role),
            };
            JwtSecurityToken token = new JwtSecurityToken(_config.GetValue<string>("jwt:issuer"), _config.GetValue<string>("jwt:audience"), claims, expires: DateTime.Now.AddDays(1), signingCredentials: credentials);
            string stringToken = new JwtSecurityTokenHandler().WriteToken(token);
            return stringToken;
        }
    }
}
