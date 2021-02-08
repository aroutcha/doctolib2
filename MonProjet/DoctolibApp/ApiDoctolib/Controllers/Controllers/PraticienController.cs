using ApiDoctolib.Models;
using ApiDoctolib.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiDoctolib.Controllers
{
        [Route("api/v1/praticiens")]
        [EnableCors("all")]
        [ApiController]
        public class PraticienController : ControllerBase
        {

            private IUpload _upload;

           
        public PraticienController(IUpload upload)
            {
                _upload = upload;
            }
            [HttpGet("filter/{search}")]
            [Authorize("connect")]
            public List<Praticien> Get(string search)
            {
                return Praticien.Search(search);
            }

            [HttpGet]
           [Authorize("connect")]
            public List<Praticien> Get()
            {
                return Praticien.Search(null);
            }

            [HttpGet("{id}")]
           [Authorize("connect")]
            public Praticien Get(int id)
            {
                return Praticien.GetPraticien(id);
            }

            [HttpPost]
           [Authorize("admin")]
            public Praticien Post([FromForm] Praticien praticien, [FromForm] IFormFile image)
            {
                praticien.Images.Add(new Image() { Url = _upload.Upload(image) });
                praticien.Save();
                return praticien;
            }

            [HttpPut("{id}/images")]

            [Authorize("admin")]
            public Praticien Put(int id, [FromForm] IFormFile image)
            {
                Praticien praticien = Praticien.GetPraticien(id);
                if (praticien != null)
                {
                praticien.Images.Add(new Image() { Url = _upload.Upload(image) });
                praticien.Update();
                }
                return praticien;
            }

        }
    }

