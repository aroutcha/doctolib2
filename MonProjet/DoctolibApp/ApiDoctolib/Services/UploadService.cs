using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace ApiDoctolib.Services
{
    public class UploadService : IUpload
    {
        private IWebHostEnvironment _env;

        public UploadService(IWebHostEnvironment env)
        {
            _env = env;
        }
        public string Upload(IFormFile file)
        {
            string pathFile = Path.Combine(_env.WebRootPath, "images", file.FileName);
            Stream stream = System.IO.File.Create(pathFile);
            file.CopyTo(stream);
            stream.Close();
            return "images/" + file.FileName;
        }
    }
}
