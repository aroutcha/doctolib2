using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctolibApp.Services
{
   public  interface IUpload
    {
        string Upload(IFormFile image);
    }
}
