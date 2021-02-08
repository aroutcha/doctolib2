using DoctolibApp.Models;
using DoctolibApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctolibApp.Controllers
{
    public class PraticienController : Controller
    {
        private IWebHostEnvironment _env;

        private IRdv _rdvService;

        private IUpload _uploadSerice;

         private ILogin _login;

        public PraticienController(IWebHostEnvironment env, IRdv rdv, IUpload uploadService ,ILogin login)
        {
            _env = env;
            _rdvService = rdv;
            _uploadSerice = uploadService;
           _login = login;
        }

        [Authorize(Policy = "connect")]
        public IActionResult Index(string search)
        {
            List<Praticien> praticiens = null;
            if (search != null)
                praticiens = Praticien.Search(search);
            return View(praticiens);
        }

        [Authorize(Policy = "connect")]
        public IActionResult SearchAjax(string search, bool ajax)
        {
            List<Praticien> praticiens = null;
            if (search != null)
                praticiens = Praticien.Search(search);
            if (ajax)
            {
                return PartialView(praticiens);
            }
            return View(praticiens);
        }


        public IActionResult DetailPraticien(int id)
        {
            ViewBag.BaseUrl = "http://localhost:65078/";

            ViewBag.isRdv = _rdvService.IsRdv(id);
            return View(Praticien.GetPraticien(id));
        }
       


      [Authorize(Policy = "connectAdmin")]
        public IActionResult FormPraticien()
        {
            return View();
        }
       


        [HttpPost]
        public IActionResult SubmitFromPraticien(Praticien praticien, IFormFile[] images)
        {
            foreach (IFormFile image in Request.Form.Files)
            {
                praticien.Images.Add(new Image() { Url = _uploadSerice.Upload(image) });
            }
            praticien.Save();

            return new JsonResult(new { error = false });
            // return RedirectToAction("Index");
        }


        public IActionResult Rdv()
        {
            return View(_rdvService.GetRdv());

        }


        public IActionResult AddRdv(int id)
        {
            _rdvService.AddRdv(id);
            return RedirectToAction("Rdv");
        }


        public IActionResult RemoveFromRdv(int id)
        {
            _rdvService.RemoveFromRdv(id);
            return RedirectToAction("Rdv");
        }

        public IActionResult GetUrl()
        {
            return View();
        }



    }
}
