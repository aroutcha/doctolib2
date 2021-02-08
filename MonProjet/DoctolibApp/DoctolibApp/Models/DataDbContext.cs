using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctolibApp.Models
{
    public class DataDbContext : DbContext
    {
        private static DataDbContext _instance = null;
        public DbSet<Praticien> Praticiens { get; set; }
        public DbSet<Utilisateur> Utilisateurs { get; set; }

        public DataDbContext()
        {

        }
        public DataDbContext(DbContextOptions options) : base(options)
        {

        }
        public static DataDbContext Instance
        {
            get
            {
                if (_instance == null)
                    _instance = new DataDbContext();
                return _instance;
            }
        }


        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder.UseSqlServer(@"Data Source=(LocalDb)\projetdoctolib7;Integrated Security=True");
        }
    }

}
