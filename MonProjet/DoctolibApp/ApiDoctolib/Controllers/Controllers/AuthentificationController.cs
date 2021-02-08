using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiDoctolib.Models;
using ApiDoctolib.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace ApiDoctolib.Controllers
{
    [Route("api/v1/[controller]")]
    [EnableCors("all")]
    [ApiController]
    public class AuthentificationController : ControllerBase
    {
        private ILogin _loginService;

        public AuthentificationController(ILogin loginService)
        {
            _loginService = loginService;
        }
        [HttpPost]
        public JsonResult Login([FromBody]Utilisateur utilisateur)
        {
            return new JsonResult(new { token = _loginService.Login(utilisateur) });
        }
    }
}