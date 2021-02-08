using DoctolibApp.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace DoctolibApp
{
    public static class Extension
    {
        public static void AddAll(this IServiceCollection services)
        {
            services.AddSession();
            services.AddHttpContextAccessor();
            services.AddTransient<IRdv, RdvCookieService>();
        }
    }
}
