using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using DoctolibApp.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace DoctolibApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSession();
            services.AddHttpContextAccessor();
            services.AddTransient<IRdv, RdvSessionService>();
            services.AddTransient<IUpload, UploadService>();
            services.AddTransient<ILogin, LoginService>();

            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                   .AddCookie(options =>
                   {
                       options.LoginPath = new PathString("/authentication/login");
                       options.AccessDeniedPath = new PathString("/authentication/denied");
                       options.ExpireTimeSpan = TimeSpan.FromDays(1);
                   });

            services.AddAuthorization(options =>
             {
                 options.AddPolicy("connect", policy =>
                 {
                    //policy.RequireClaim(ClaimTypes.Email);
                    policy.Requirements.Add(new ConnectRequirement());
                 });
                 options.AddPolicy("connectAdmin", policy =>
                 {
                    //policy.RequireClaim(ClaimTypes.Email);
                    policy.Requirements.Add(new ConnectRequirement("admin"));
                 });
             });
            services.AddScoped<IAuthorizationHandler, CustomAuthorizationHandler>();

            //services.AddAll();
            //services.AddSingleton<IFavoris, FavorisSessionService>();
            //services.AddScoped<IFavoris, FavorisSessionService>();
            services.AddControllersWithViews();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSession();
            app.UseAuthentication();
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "home",
                    pattern: "/", new { controller = "Praticien", action = "Index" });
                endpoints.MapControllerRoute(
                    name: "search",
                    pattern: "/search/{search}", new { controller = "Praticien", action = "Index" });
                endpoints.MapControllerRoute(
                    name: "add",
                    pattern: "/add", new { controller = "Praticien", action = "Form" });
                endpoints.MapControllerRoute(
                    name: "detail",
                    pattern: "/detail/{id}", new { controller = "Praticien", action = "DetailPraticien" });
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action}");
            });
        }
    }
}
